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
  profile_picture = models.ImageField(upload_to='tutor_images/')

  def __str__(self):
    return self.username
    

class TutorDetails(models.Model):

  tutor = models.ForeignKey(TutorProfile,on_delete=models.CASCADE)
  highest_qualification = models.CharField(max_length=100)
  subjects_taught = models.CharField(max_length=100)
  teaching_experience = models.CharField(max_length=50)
  language_spoken = models.CharField(max_length=50)

  def __str__(self):
    return self.tutor.username

  

class TutorPreferences(models.Model):

  tutor = models.ForeignKey(TutorProfile,on_delete=models.CASCADE)
  teaching_mode = models.CharField(max_length=20)
  age_group = models.CharField(max_length=30)
  travel_preference = models.CharField(max_length=10)
  fee_range = models.CharField(max_length=10)

  def __str__(self):
    return self.tutor.username

class TutorIntroduction(models.Model):

  tutor = models.ForeignKey(TutorProfile,on_delete=models.CASCADE)
  bio = models.TextField()
  tagline = models.CharField(max_length=100)
  video = models.FileField(upload_to='tutor-intro/')
  resume = models.FileField(upload_to='tutors-resume/')

  def __str__(self):
    return self.tutor.username




