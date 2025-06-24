from rest_framework.serializers import ModelSerializer
from .models import TutorDetails,TutorIntroduction,TutorProfile,TutorPreferences


class TutorDetailsSerializer(ModelSerializer):
    class Meta:
        model = TutorDetails
        fields = "__all__"
        extra_kwargs = {'tutor': {'required': False}}  # Make tutor field optional

class TutorIntroductionSerializer(ModelSerializer):
    class Meta:
        model = TutorIntroduction
        fields = "__all__"
        extra_kwargs = {'tutor': {'required': False}}  # Make tutor field optional

class TutorPreferencesSerializer(ModelSerializer):
    class Meta:
        model = TutorPreferences
        fields = "__all__"
        extra_kwargs = {'tutor': {'required': False}}  # Make tutor field optional

class TutorProfileSerializer(ModelSerializer):
    details = TutorDetailsSerializer()
    introduction = TutorIntroductionSerializer()
    preferences = TutorPreferencesSerializer()

    class Meta:
        model = TutorProfile
        fields = ["username","password","full_name","email","date_of_birth","gender","address","profile_picture","details","introduction","preferences"]

    def create(self, validated_data):
        # Extract nested data
        details_data = validated_data.pop('details')
        introduction_data = validated_data.pop('introduction')
        preferences_data = validated_data.pop('preferences')
        
        # Create the main TutorProfile
        tutor = TutorProfile.objects.create(**validated_data)
        
        # Create related objects
        TutorDetails.objects.create(tutor=tutor, **details_data)
        TutorIntroduction.objects.create(tutor=tutor, **introduction_data)
        TutorPreferences.objects.create(tutor=tutor, **preferences_data)
        
        return tutor
