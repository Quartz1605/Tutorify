from django.contrib import admin
from .models import TutorDetails,TutorIntroduction,TutorPreferences,TutorProfile

# Register your models here.

admin.site.register(TutorDetails)
admin.site.register(TutorIntroduction)
admin.site.register(TutorPreferences)
admin.site.register(TutorProfile)
