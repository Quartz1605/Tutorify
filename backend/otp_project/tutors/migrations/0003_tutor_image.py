# Generated by Django 5.1.6 on 2025-03-23 18:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tutors', '0002_tutor_subject_tutor_yoe'),
    ]

    operations = [
        migrations.AddField(
            model_name='tutor',
            name='image',
            field=models.CharField(default='img_path', max_length=255),
        ),
    ]
