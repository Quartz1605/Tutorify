from django.urls import path
from .views import StudentView
from rest_framework_simplejwt.views import TokenRefreshView,TokenObtainPairView

urlpatterns = [
  path('api/register_student/',StudentView.as_view(),name="student_register"),
  path('api/token/',TokenObtainPairView.as_view(),name="login"),
  path('api/token_refresh/',TokenRefreshView.as_view(),name="refresh"),
]