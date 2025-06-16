from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class Student(AbstractUser):
  fullname = models.CharField(max_length=100)
  birthdate = models.CharField(max_length=20)
  gender = models.CharField(max_length=20)
  address = models.TextField()
  phone_number = models.CharField(max_length=12)
  parent_name = models.CharField(max_length=30)
  parent_email = models.CharField(max_length=25)
  parent_phone_number = models.CharField(max_length=12)
  other_phone_number = models.CharField(max_length=15)
  school_details = models.TextField()
  current_grade = models.CharField(max_length=10)
  subjects_of_interest = models.CharField(max_length=80)
  preferred_tutor_mode = models.CharField(max_length=16)
  language_preferences = models.CharField(max_length=60)

  def __str__(self):
    return self.fullname


