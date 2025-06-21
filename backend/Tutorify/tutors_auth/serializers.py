from rest_framework.serializers import ModelSerializer
from .models import TutorDetails,TutorIntroduction,TutorProfile,TutorPreferences



class TutorDetailsSerializer(ModelSerializer):
  class Meta:
    model = TutorDetails
    fields = "__all__"


class TutorIntroductionSerializer(ModelSerializer):
  class Meta:
    model = TutorIntroduction
    fields = "__all__"


class TutorPreferencesSerializer(ModelSerializer):
  class Meta:
    model = TutorPreferences
    fields = "__all__"



class TutorProfileSerializer(ModelSerializer):

  details = TutorDetailsSerializer()
  introduction = TutorIntroductionSerializer()
  preferences = TutorPreferencesSerializer()

  class Meta:
    model = TutorProfile
    fields = ["username","password","full_name","email","date_of_birth","gender","address","profile_picture","details","introduction","preferences"]
