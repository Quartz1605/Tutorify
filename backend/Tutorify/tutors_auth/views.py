from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import TutorProfileSerializer
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.parsers import MultiPartParser, FormParser


# Create your views here.


class TutorRegisterView(APIView):

  parser_classes = (MultiPartParser, FormParser)
  
  def post(self,request):

    serializer = TutorProfileSerializer(data=request.data)

    if serializer.is_valid():

      tutor = serializer.save() 

      tutor.password = make_password(request.data["password"]) ## Here make cus we have not used the abstract model in the process
      
      tutor.save()

      refresh = RefreshToken.for_user(tutor)
     

      return Response({
        
        "message" : "Tutor registered successfully",
        "refresh" : str(refresh),
        "access" : str(refresh.access_token)

      },status=status.HTTP_201_CREATED)
    
    else:
      
      return Response({"errors" : serializer.errors},status=status.HTTP_400_BAD_REQUEST)

