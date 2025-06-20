from django.db import models


# Create your models here.

class TutorProfile(models.Model):

  username = models.CharField(max_length=50)
  password = models.CharField(max_length=50)
  full_name = models.CharField(max_length=50)
  email = models.CharField(max_length=50)
  date_of_birth = models.CharField(max_length=20)
  gender = models.CharField(max_length=10)
  address = models.TextField()
  



