from django.shortcuts import render 

# Create your views here.
from .models import SMSOTP
from rest_framework.views import APIView
from django.contrib.auth.models import User
import random
from rest_framework.response import Response
from rest_framework import status
import requests


class GenerateOTP(APIView):
  def post(self,request):
    phone_number = request.data.get("phone_number")
    user,created = User.objects.get_or_create(username=phone_number)


    otp_code = str(random.randint(100000,999999))
    SMSOTP.objects.create(user=user,otp_code=otp_code)


    # Write your SMS code here.
    ACCESS_TOKEN = "EAAIZBD9cDZCPgBOx6Bpbqjn5yTVTihSWl7OZCnF19hO3PHo6DcZBlWpl8u0pFb1i8azSIzH6oMfZBrwmid67ZArTspHaMgChoVnpSZA5ELbLCBBlZAytfbGkBbVId18SeJLbcTcgAACOCBmUXNviYZAcFeYLZC25TmmK3www94JU7WzJDgfKnc3wPNsGmAFZCMxyaZC8KqrfR3uvMQLXXCZBd56SiUPZBUZC8CgP3jK04KMZBhZAG"

    PHONE_NUMBER_ID = "635496932971788"
    WABA_ID = "1151596216228830"
    WHATSAPP_API_URL = f"https://graph.facebook.com/v22.0/{PHONE_NUMBER_ID}/messages"


    

    payload = {
    "messaging_product": "whatsapp",
    "to": phone_number,  
    "type": "template",
    "template": {
    "name": "otptemplate", 
    "language": {
      "code": "en_US"  
    },
    "components": [
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "text": otp_code  
          }
        ]
      },
      {
        "type": "button",
        "sub_type": "url",  
        "index": 0,  
        "parameters": [
          {
            "type": "text",
            "text": otp_code  
          }
        ]
      }
      ]
    }
    }
        

    headers = {
      "Authorization" : f"Bearer {ACCESS_TOKEN}",
      "Content-Type" : "application/json"
    }

    response = requests.post(WHATSAPP_API_URL,json=payload,headers=headers)

    if response.status_code == 200:
      return Response({"message" : "OTP sent sucessfully"},status=status.HTTP_200_OK)
    else:
      return Response({"error" : response.json()},status=status.HTTP_400_BAD_REQUEST)




    
  



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







    
