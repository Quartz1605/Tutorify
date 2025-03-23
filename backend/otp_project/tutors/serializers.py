from .models import Tutor
from rest_framework import serializers 

class TutorSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tutor
    fields = "__all__"

