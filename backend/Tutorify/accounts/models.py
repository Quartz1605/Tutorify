from django.db import models

# Create your models here.

from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
  USER_TYPE_CHOICES = (
      ('student', 'Student'),
      ('tutor', 'Tutor'),
  )
  user_type = models.CharField(max_length=10, choices=USER_TYPE_CHOICES)
   

  def __str__(self):
    return f"{self.username} ({self.user_type})"
