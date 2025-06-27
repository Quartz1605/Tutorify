from django.urls import path
from .views import TutorSignupView
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView


urlpatterns = [
  path("tutors/api/tutor-register/",TutorSignupView.as_view(),name="tutor-register"),
  path('tutors/api/token/',TokenObtainPairView.as_view(),name="Tlogin"),
  path('tutors/api/token_refresh/',TokenRefreshView.as_view(),name="refresh"),
]