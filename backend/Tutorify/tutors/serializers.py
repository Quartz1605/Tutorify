from rest_framework import serializers
from .models import TutorDetails, TutorIntroduction, TutorProfile, TutorPreferences


class TutorDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TutorDetails
        fields = "__all__"
        extra_kwargs = {'tutor': {'required': False}}  # allow injection during nested creation


class TutorIntroductionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TutorIntroduction
        fields = "__all__"
        extra_kwargs = {'tutor': {'required': False}}


class TutorPreferencesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TutorPreferences
        fields = "__all__"
        extra_kwargs = {'tutor': {'required': False}}


class TutorProfileSerializer(serializers.ModelSerializer):
    details = TutorDetailsSerializer()
    introduction = TutorIntroductionSerializer()
    preferences = TutorPreferencesSerializer()

    class Meta:
        model = TutorProfile
        fields = [
            'user',  # include this for OneToOne relation
            'full_name',
            'date_of_birth',
            'gender',
            'address',
            'profile_picture',
            'details',
            'introduction',
            'preferences',
        ]
        extra_kwargs = {'user': {'required': False}}

    def create(self, validated_data):
        # Extract nested data
        details_data = validated_data.pop('details')
        introduction_data = validated_data.pop('introduction')
        preferences_data = validated_data.pop('preferences')

        # Get user from context or validated_data
        user = self.context.get('user') or validated_data.get('user')
        if not user:
            raise serializers.ValidationError({"user": "User must be provided in context or data."})
        validated_data['user'] = user

        # Create main TutorProfile
        tutor = TutorProfile.objects.create(**validated_data)

        # Create nested linked objects
        TutorDetails.objects.create(tutor=tutor, **details_data)
        TutorIntroduction.objects.create(tutor=tutor, **introduction_data)
        TutorPreferences.objects.create(tutor=tutor, **preferences_data)

        return tutor