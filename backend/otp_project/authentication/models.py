from django.db import models

# Create your models here.
import random
from django.contrib.auth.models import User
from django.db import models
from django.utils.timezone import now

class OTP(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    otp_code = models.CharField(max_length=6)
    created_at = models.DateTimeField(default=now)
    
    def is_valid(self):
        return (now() - self.created_at).seconds < 300 