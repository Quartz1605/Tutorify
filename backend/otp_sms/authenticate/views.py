from django.shortcuts import render 

# Create your views here.
from .models import SMSOTP
from rest_framework.views import APIView
from django.contrib.auth.models import User
import random
from rest_framework.response import Response
from rest_framework import status

class GenerateOTP(APIView):
  def post(self,request):
    phone_number = request.data.get("phone_number")
    user,created = User.objects.get_or_create(username=phone_number,phone_number=phone_number)


    otp_code = str(random.randint(100000,999999))
    SMSOTP.objects.create(user=user,otp_code=otp_code)


    # Write your SMS code here.


    return Response({"message" : "OTP sent sucessfully"},status=status.HTTP_200_OK)
  



class VerifyOTP(APIView):
  def post(self,request):

    phone_number = request.data.get('phone_number')
    otp_code = request.data.get('otp')

    try:

      user = User.objects.get(phone_number=phone_number)
      otp_record = SMSOTP.objects.filter(user=user,otp_code=otp_code).last()

      if otp_record and otp_record.is_valid():
        return Response({"message" : "OTP Verified Successfully."},status=status.HTTP_200_OK)
      
      else:
        return Response({"message": "Invalid or expired OTP."},status=status.HTTP_400_BAD_REQUEST)
      
    except User.DoesNotExist:
      return Response({"error" : "User does not exist"},status=status.HTTP_400_BAD_REQUEST)







    
