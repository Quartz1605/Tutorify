from django.urls import path
from .views import tutor_list

urlpatterns = [path('api/tutors/',tutor_list)]
