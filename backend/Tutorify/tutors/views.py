from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework_simplejwt.tokens import RefreshToken
from django.db import transaction
from accounts.models import User
from .models import TutorProfile, TutorDetails, TutorPreferences, TutorIntroduction


class TutorRegisterView(APIView):
    """
    Register a new tutor with all related information
    """
    parser_classes = (MultiPartParser, FormParser)
    
    def post(self, request):
        data = request.data
        
        # Debug: Print all received data
        print("=== DEBUG: Received data ===")
        for key, value in data.items():
            print(f"{key}: {value}")
        print("=== END DEBUG ===")
        
        # Extract and validate user credentials
        username = data.get("username")
        password = data.get("password")
        email = data.get("email")
        
        if not username or not password:
            return Response({
                "message": "Username and password are required",
                "success": False
            }, status=status.HTTP_400_BAD_REQUEST)
        
        if User.objects.filter(username=username).exists():
            return Response({
                "message": "Username already taken",
                "success": False
            }, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            with transaction.atomic():
                # Create user
                print("Creating user...")
                user = User.objects.create_user(
                    username=username,
                    password=password,
                    email=email,
                    user_type="tutor"
                )
                print(f"User created: {user.username}")
                
                # Create TutorProfile
                print("Creating TutorProfile...")
                tutor_profile = TutorProfile.objects.create(
                    user=user,
                    full_name=data.get('full_name'),
                    date_of_birth=data.get('date_of_birth'),
                    gender=data.get('gender'),
                    address=data.get('address'),
                    profile_picture=data.get('profile_picture')
                )
                print(f"TutorProfile created: {tutor_profile.id}")
                
                # Create TutorDetails
                print("Creating TutorDetails...")
                TutorDetails.objects.create(
                    tutor=tutor_profile,
                    highest_qualification=data.get('details.highest_qualification'),
                    subjects_taught=data.get('details.subjects_taught'),
                    teaching_experience=data.get('details.teaching_experience'),
                    language_spoken=data.get('details.language_spoken')
                )
                print("TutorDetails created")
                
                # Create TutorPreferences
                print("Creating TutorPreferences...")
                TutorPreferences.objects.create(
                    tutor=tutor_profile,
                    teaching_mode=data.get('preferences.teaching_mode'),
                    age_group=data.get('preferences.age_group'),
                    travel_preference=data.get('preferences.travel_preference'),
                    fee_range=data.get('preferences.fee_range')
                )
                print("TutorPreferences created")
                
                # Create TutorIntroduction
                print("Creating TutorIntroduction...")
                TutorIntroduction.objects.create(
                    tutor=tutor_profile,
                    bio=data.get('introduction.bio'),
                    tagline=data.get('introduction.tagline'),
                    video=data.get('introduction.video'),
                    resume=data.get('introduction.resume')
                )
                print("TutorIntroduction created")
                
                # Generate JWT tokens
                refresh = RefreshToken.for_user(user)
                
                return Response({
                    "message": "Tutor registered successfully",
                    "tutor_id": tutor_profile.id,
                    "access": str(refresh.access_token),
                    "refresh": str(refresh),
                    "success": True
                }, status=status.HTTP_201_CREATED)
                    
        except Exception as e:
            print(f"ERROR: {str(e)}")
            import traceback
            traceback.print_exc()
            return Response({
                "message": "Registration failed",
                "error": str(e),
                "success": False
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)