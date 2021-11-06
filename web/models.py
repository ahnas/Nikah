from django.db import models
import json

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db.models.deletion import CASCADE
from django.http.response import JsonResponse
from versatileimagefield.fields import VersatileImageField

from user.models import Image


class Profile(models.Model):

    GENDER_CHOICES = (('male', 'Male'),('female', 'Female'),('other', 'Other'))
    profileCreated_CHOICES = (('self','Self'),('parent','Parent'),('brother','Brother'),('sister','Sister'))
    martialStatus_CHOICES = (('single','Single'),('divorced','Divorced'),)
    bodyType_CHOICES = (('slim','Slim'),('muscular','Muscular'),('fat',('Fat')))

    """User Properties"""
    
    profilecode = models.CharField(max_length=225)
    name = models.CharField(max_length=225)
    gender = models.CharField(max_length=225,choices=GENDER_CHOICES,default="male")
    age = models.CharField(max_length=225)
    status = models.CharField(max_length=225,choices=martialStatus_CHOICES,default='single')
    relegion = models.CharField(max_length=225) 
    highereducation = models.CharField(max_length=225)
    job = models.CharField(max_length=225)
    place = models.CharField(max_length=225)
    image = VersatileImageField('Profile',blank=True,null=True,upload_to="Profile/")


    class Meta:
        verbose_name_plural = ('Profile')
       
    def __str__(self):
        return str(self.name)
