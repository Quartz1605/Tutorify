from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from accounts.models import User
from .serializers import TutorProfileSerializer
from rest_framework.parsers import MultiPartParser, FormParser

class TutorSignupView(APIView):
    
    parser_classes = (MultiPartParser, FormParser)
    
    def post(self, request):
        data = request.data.copy()

        # 1. Extract and create the user
        username = data.get("username")
        password = data.get("password")

        if not username or not password:
            return Response({"error": "Username and password are required."}, status=400)

        if User.objects.filter(username=username).exists():
            return Response({"error": "Username already taken."}, status=400)

        user = User.objects.create_user(
            username=username,
            password=password,
            user_type="tutor"
        )

        # 2. Remove user-related fields before passing to serializer
        data.pop("username")
        data.pop("password")

        # 3. Pass new user into serializer context
        serializer = TutorProfileSerializer(data=data, context={"user": user})
        if serializer.is_valid():
            serializer.save()

            # 4. Generate JWT tokens
            refresh = RefreshToken.for_user(user)
            return Response({
                "message": "Tutor registered successfully",
                "access": str(refresh.access_token),
                "refresh": str(refresh),
            }, status=201)

        else:
            user.delete()  # rollback user creation on failure
            return Response(serializer.errors, status=400)
