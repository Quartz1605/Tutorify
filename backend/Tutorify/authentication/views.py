from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import StudentSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

# Create your views here.

class StudentView(APIView):

  def post(self,request):

    data = request.data

    if data:
      serializer = StudentSerializer(data=request.data)
      

    if serializer.is_valid():
      user = serializer.save()
      user.set_password(request.data["password"])#For hashing.
      user.save()

      refresh = RefreshToken.for_user(user)

      return Response({
        "message" : "Data stored successfully",
        "refresh" : str(refresh),
        "access":  str(refresh.access_token),
        
      },status=status.HTTP_201_CREATED)
    
    else:
      return Response({"errors" : serializer.errors},status=status.HTTP_400_BAD_REQUEST)


