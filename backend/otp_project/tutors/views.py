from django.shortcuts import render 

# Create your views here.

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Tutor
from .serializers import TutorSerializer

@api_view(['GET'])
def tutor_list(request):
  tutors = Tutor.objects.all()
  serializer = TutorSerializer(tutors,many=True)
  return Response(serializer.data)



