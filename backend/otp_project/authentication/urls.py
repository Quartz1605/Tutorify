from django.urls import path
from .views import GenerateOTP, VerifyOTP

urlpatterns = [
    path('send-otp/', GenerateOTP.as_view(), name='send-otp'),
    path('verify-otp/', VerifyOTP.as_view(), name='verify-otp'),
]