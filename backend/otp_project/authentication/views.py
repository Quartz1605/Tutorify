from django.shortcuts import render

# Create your views here.
import random
from django.contrib.auth.models import User
from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import OTP

class GenerateOTP(APIView):
    def post(self, request):
        email = request.data.get('email')
        user, created = User.objects.get_or_create(username=email, email=email)

        otp_code = str(random.randint(100000, 999999))
        OTP.objects.create(user=user, otp_code=otp_code)

        # Send OTP via email
        send_mail(
            'Your OTP Code for GROCERÓ.',
            f'Your OTP code is {otp_code}',
            'prathambarekal@gmail.com',  
            [email],
            fail_silently=False,
        )

        return Response({"message": "OTP sent successfully!"}, status=status.HTTP_200_OK)
    



class VerifyOTP(APIView):
    def post(self, request):
        email = request.data.get('email')
        otp_code = request.data.get('otp')

        try:
            user = User.objects.get(email=email)
            otp_record = OTP.objects.filter(user=user, otp_code=otp_code).last()
            
            if otp_record and otp_record.is_valid():
                return Response({"message": "OTP verified successfully!"}, status=status.HTTP_200_OK)
            else:
                return Response({"error": "Invalid or expired OTP."}, status=status.HTTP_400_BAD_REQUEST)
        
        except User.DoesNotExist:
            return Response({"error": "User not found."}, status=status.HTTP_400_BAD_REQUEST)

