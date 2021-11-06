from django.db import models
import json

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db.models.deletion import CASCADE
from django.db.models.fields.related import ForeignKey, OneToOneField
from django.http.response import JsonResponse
from versatileimagefield.fields import VersatileImageField


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        """Create Save a User"""
        if not email:
            raise ValueError('User must have a Email')
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        if user:
            return user

    def create_superuser(self, email, password):
        """Create and Save a super User"""
        user = self.model(email=email)
        user.set_password(password)
        user.save(using=self.db)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    """"Custom Model"""
    email = models.EmailField(max_length=225, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'

    def __str__(self):
        return str(self.email)


    
class UserProperties(models.Model):

    GENDER_CHOICES = (('male', 'Male'),('female', 'Female'),('other', 'Other'))
    profileCreated_CHOICES = (('self','Self'),('parent','Parent'),('brother','Brother'),('sister','Sister'))
    martialStatus_CHOICES = (('single','Single'),('divorced','Divorced'),('Second Marriage','Second Marriage'))
    bodyType_CHOICES = (('slim','Slim'),('muscular','Muscular'),('fat',('Fat')),('Normal',('Normal')))
    community_CHOICES = (('Shafi','Shafi'),('Malilki','Malilki'),('Hanafi','Hanafi'),('Hambali',('Hambali')))
    smoking_CHOICES = (('Yes','Yes'),('No','No'),('occasionally','occasionally'),('Addicted',('Addicted')))
    financialStatus_CHOICES = (('High','High'),('Middle','Middle'),('Low','Low'))
    complexion_CHOICES = (('Fair skin','Fair skin'),('Extremely fair skin','Extremely fair skin'),('Black skin','Black skin'),('Medium skin','Medium skin'),('Olive skin','Olive skin'),('Brown skin','Brown skin'))
    
    """User Properties"""
    user = models.OneToOneField(User,on_delete=models.CASCADE,unique=True)
    profileCreated =models.CharField(max_length=225,choices=profileCreated_CHOICES,default="self")
    name = models.CharField(max_length=225)
    gender = models.CharField(max_length=225,choices=GENDER_CHOICES,default="male")
    community = models.CharField(max_length=225,choices=community_CHOICES,default="Shafi")
    moblie = models.CharField(max_length=225)
    preferredProfile = models.CharField(max_length=225,choices=community_CHOICES,default="Shafi")
    dateOfBirth = models.DateField()
    relegion = models.CharField(max_length=225)
    nationality = models.CharField(max_length=225)
    height = models.IntegerField() 
    weight = models.IntegerField() 
    martialStatus = models.CharField(max_length=225,choices=martialStatus_CHOICES,default="single") 
    complexion = models.CharField(max_length=225,choices=complexion_CHOICES,default='Medium skin') 
    ethnicGroup = models.CharField(max_length=225) 
    bodyType = models.CharField(max_length=225,choices=bodyType_CHOICES,default="slim") 
    physicalStatus = models.CharField(max_length=225)
    motherTongue = models.CharField(max_length=225)
    fatherOccupation = models.CharField(max_length=225)
    motherOccupation = models.CharField(max_length=225)
    brothers = models.CharField(max_length=225)
    sisters = models.CharField(max_length=225)
    financialStatus = models.CharField(max_length=225,choices=financialStatus_CHOICES,default="High")
    smoking = models.CharField(max_length=225,choices=smoking_CHOICES,default="No")
    drinking = models.CharField(max_length=225,choices=smoking_CHOICES,default="No")

    class Meta:
        verbose_name_plural = ('UserProperties')
       
    def __str__(self):
        return str(self.name)
    
    class Meta:
        verbose_name = ('User Details')
        verbose_name_plural = ('User Details')



class UserEducationLocationContact(models.Model):

    performNamaz_CHOICES = (('Daily', 'Daily'),('Yes', 'Yes'),('No', 'No'),('Occationally', 'Occationally'))
    attendIslamicServices_CHOICES = (('Yes', 'Yes'),('No', 'No'))
    userProperties=OneToOneField(UserProperties,on_delete=models.CASCADE,unique=True)
    user = models.OneToOneField(User,on_delete=models.CASCADE,unique=True)
    highestEducation = models.CharField(max_length=225)
    profession = models.CharField(max_length=225)
    professionType = models.CharField(max_length=225)

    nativeCountry = models.CharField(max_length=225)
    nativeState = models.CharField(max_length=225)
    nativeCity = models.CharField(max_length=225)

    houseName = models.CharField(max_length=225)
    locality = models.CharField(max_length=225)
    pincode = models.CharField(max_length=225)

    primaryNumber = models.CharField(max_length=225)
    secondaryNumber = models.CharField(max_length=225)
    preferedContact = models.CharField(max_length=225)
    relation = models.CharField(max_length=225)
    describe = models.TextField(max_length=1000)

    performNamaz = models.CharField(max_length=225,choices=performNamaz_CHOICES,default="Yes")
    religiousness = models.CharField(max_length=225)
    readQuran = models.CharField(max_length=225,choices=performNamaz_CHOICES,default="Yes")
    madrassaEducation = models.CharField(max_length=225)
    attendIslamicServices = models.CharField(max_length=225,choices=attendIslamicServices_CHOICES,default="Yes")

    # eliteclass = models.CharField(max_length=225)

    def __str__(self):
        return str(self.highestEducation)




    def __str__(self):
        return str(self.user)
    
    class Meta:
        verbose_name = ('User Religious Status')
        verbose_name_plural = ('User Religious Status')


   

class Image(models.Model):

    is_verified = models.BooleanField(default=False)
    nmId = models.CharField(max_length=10)
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    image = VersatileImageField('Profile',blank=True,null=True,upload_to="Profile/",
     width_field='width',
        height_field='height',
    )
    height = models.PositiveIntegerField(
        'Image Height',
        blank=True,
        null=True
    )
    width = models.PositiveIntegerField(
        'Image Width',
        blank=True,
        null=True
    )
    profile= models.OneToOneField(UserProperties,on_delete=models.CASCADE)
    education= models.OneToOneField(UserEducationLocationContact,on_delete=models.CASCADE)

    def __str__(self):
        return str(self.nmId)
    class Meta:
        verbose_name = ('Verification')
        verbose_name_plural = ('Verifications')
    

class UserPreferences(models.Model):

    martialStatus_CHOICES = ((None,None),('single','Single'),('divorced','Divorced'),)
    bodyType_CHOICES = ((None,None),('slim','Slim'),('muscular','Muscular'),('fat',('Fat')))
    community_CHOICES = ((None,None),('Shafi','Shafi'),('Malilki','Malilki'),('Hanafi','Hanafi'),('Hambali',('Hambali')))
    smoking_CHOICES = ((None,None),('Yes','Yes'),('No','No'),('occasionally','occasionally'),('Addicted',('Addicted')))
    financialStatus_CHOICES = ((None,None),('High','High'),('Middle','Middle'),('Low','Low'))
    complexion_CHOICES = ((None,None),('Fair skin','Fair skin'),('Extremely fair skin','Extremely fair skin'),('Black skin','Black skin'),('Medium skin','Medium skin'),('Olive skin','Olive skin'),('Brown skin','Brown skin'))
    
    """User Properties"""
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    community = models.CharField(max_length=225,choices=community_CHOICES,null=True,default=None,blank=True)
    ageFrom = models.IntegerField(default=0,null=True,blank=True)
    ageTo = models.IntegerField(default=0,null=True,blank=True)
    martialStatus = models.CharField(max_length=225,choices=martialStatus_CHOICES,default=None,null=True,blank=True) 
    bodyType = models.CharField(max_length=225,choices=bodyType_CHOICES,default=None,null=True,blank=True)
    heightFrom = models.IntegerField(default=0,null=True,blank=True) 
    heightTo = models.IntegerField(default=0,null=True,blank=True) 
    weightFrom = models.IntegerField(default=0,null=True,blank=True)
    weightTo = models.IntegerField(default=0,null=True,blank=True)
    profession = models.CharField(max_length=225,blank=True)
    smoking = models.CharField(max_length=225,choices=smoking_CHOICES,default=None,null=True,blank=True)
    drinking = models.CharField(max_length=225,choices=smoking_CHOICES,default=None,null=True,blank=True)
    complexion = models.CharField(max_length=225,choices=complexion_CHOICES,default=None,null=True,blank=True)




class LikeProfile(models.Model):
    liked_by_user = models.ForeignKey(Image,on_delete=models.CASCADE)
    liked_user = models.ForeignKey(User,on_delete=models.CASCADE)
                                                                                          