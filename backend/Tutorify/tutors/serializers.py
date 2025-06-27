from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from accounts.models import User
from .models import TutorProfile, TutorDetails, TutorPreferences, TutorIntroduction


class TutorDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TutorDetails
        fields = ['highest_qualification', 'subjects_taught', 'teaching_experience', 'language_spoken']


class TutorPreferencesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TutorPreferences
        fields = ['teaching_mode', 'age_group', 'travel_preference', 'fee_range']


class TutorIntroductionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TutorIntroduction
        fields = ['bio', 'tagline', 'video', 'resume']
        extra_kwargs = {
            'video': {'required': False},
            'resume': {'required': False}
        }


class TutorRegistrationSerializer(serializers.ModelSerializer):
    # TutorProfile fields
    full_name = serializers.CharField()
    date_of_birth = serializers.CharField()
    gender = serializers.CharField()
    address = serializers.CharField()
    profile_picture = serializers.ImageField(required=False)
    
    # Nested serializers with dot notation fields from frontend
    details = TutorDetailsSerializer()
    preferences = TutorPreferencesSerializer()
    introduction = TutorIntroductionSerializer()

    class Meta:
        model = TutorProfile
        fields = [
            'full_name', 'date_of_birth', 'gender', 'address', 
            'profile_picture', 'details', 'preferences', 'introduction'
        ]

    def create(self, validated_data):
        # Extract nested data
        details_data = validated_data.pop('details')
        preferences_data = validated_data.pop('preferences')
        introduction_data = validated_data.pop('introduction')
        
        # Get user from context
        user = self.context['user']
        
        # Create TutorProfile with files handled separately
        profile_picture = validated_data.pop('profile_picture', None)
        
        tutor_profile = TutorProfile.objects.create(
            user=user,
            profile_picture=profile_picture,
            **validated_data
        )
        
        # Handle files in introduction_data separately
        video = introduction_data.pop('video', None)
        resume = introduction_data.pop('resume', None)
        
        # Create related models
        TutorDetails.objects.create(tutor=tutor_profile, **details_data)
        TutorPreferences.objects.create(tutor=tutor_profile, **preferences_data)
        TutorIntroduction.objects.create(
            tutor=tutor_profile,
            video=video,
            resume=resume,
            **introduction_data
        )
        
        return tutor_profile