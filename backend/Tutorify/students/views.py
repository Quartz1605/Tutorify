from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from accounts.models import User
from .models import Student
from .serializers import StudentSerializer
from django.contrib.auth.hashers import make_password

class StudentView(APIView):
    def post(self, request):
        data = request.data

        username = data.get("username")
        password = data.get("password")

        if not username or not password:
            return Response({"error": "Username and password are required."}, status=status.HTTP_400_BAD_REQUEST)

        # Create the user
        user = User.objects.create(
            username=username,
            password=make_password(password),  # hashes password
            user_type="student",               # set user role
        )

        # Remove user-related fields from student data
        student_data = data.copy()
        student_data.pop("username")
        student_data.pop("password")

        # Add user to student data
        student_data["user"] = user.id

        # Serialize and save student profile
        serializer = StudentSerializer(data=student_data)
        if serializer.is_valid():
            serializer.save()
            refresh = RefreshToken.for_user(user)
            return Response({
                "message": "Student created successfully.",
                "refresh": str(refresh),
                "access": str(refresh.access_token)
            }, status=status.HTTP_201_CREATED)
        else:
            # If student profile creation fails, delete user
            user.delete()
            return Response({"errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
