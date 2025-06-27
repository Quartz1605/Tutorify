from django.db import models
from accounts.models import User
# Create your models here.

class Student(models.Model):
  user = models.OneToOneField(User,on_delete=models.CASCADE)
  fullname = models.CharField(max_length=100)
  birthdate = models.CharField(max_length=20)
  gender = models.CharField(max_length=20)
  address = models.TextField()
  phone_number = models.CharField(max_length=12)
  parent_name = models.CharField(max_length=30)
  parent_email = models.EmailField(max_length=100)
  parent_phone_number = models.CharField(max_length=12)
  other_phone_number = models.CharField(max_length=15)
  school_details = models.TextField()
  current_grade = models.CharField(max_length=10)
  subjects_of_interest = models.CharField(max_length=80)
  preferred_tutor_mode = models.CharField(max_length=16)
  language_preferences = models.CharField(max_length=60)

  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.fullname
