from django.http.response import HttpResponseRedirect
from django.shortcuts import render,get_object_or_404,redirect
from django.http import HttpResponse
from django.urls import reverse
from django.contrib.auth.decorators import login_required
import json
from user import forms
from user.models import Image, UserEducationLocationContact,UserProperties,User,UserPreferences
from user.forms import UserPreferencesForm, UserPropertiesForm,UserEducationLocationContactForm
from web.models import Profile


def index(request):
    context = {
        "is_index" : True
    }
    return render(request, 'web/index.html',context) 


def login(request): 
    context = {
        "is_login" : True
    }
    return render(request, 'web/login.html',context) 


def signup(request): 
    context = {
        "is_signup" : True 
    }
    return render(request, 'web/signup.html',context) 


def profiler(request): 
    form = UserPropertiesForm(request.POST or None)
    context = {
        "is_profiler" : True,
        "form":form
    }
    return render(request, 'web/profiler.html',context)  

def profilerB(request): 
    form = UserEducationLocationContactForm(request.POST or None)
    context = {
        "is_profilerB" : True,
        "form":form
    }
    return render(request, 'web/profilerB.html',context)  


def viewprofile(request,id): 
    context = {
        "is_viewprofile" : True ,
        "id":id
    }
    return render(request, 'web/viewprofile.html',context)  

def youlike(request):  
    
    context = {
        "is_youlike" : True 
    }
    return render(request, 'web/youlike.html',context) 

def match(request): 
    
    context = {
        "is_match" : True 
    }
    return render(request, 'web/match.html',context) 

def pending(request): 
    
    context = {
        "is_pending" : True 
    }
    return render(request, 'web/pending.html',context) 



def imageupload(request): 

    if request.method == 'POST':


        image = request.FILES.get('image')
        email = request.POST.get('email1')
        user =   User.objects.filter(email=email).first()
        
        nmIDint=10000+user.id
        nmIDString = 'NM'+str(nmIDint)
        education= UserEducationLocationContact.objects.filter(user=user).first()
        profile= UserProperties.objects.filter(user=user).first()
        data = Image()
        data.height=200
        
        data.width=100
            
        data.image = image
        data.nmId=nmIDString
        data.user = user
        data.education=education
        data.profile=profile

        
        data.save()
        preference = UserPreferences()
        preference.user=user
        preference.save()

        return redirect ('web:home')
    return render(request, 'web/imageupload.html',) 



def home(request):
    profileimage = Image.objects.all()
    userproperties = UserProperties.objects.all()
    profile = Profile.objects.all()
    context = {
        "is_home" : True,
        "profileimage":profileimage,
        "userproperties":userproperties,
        "profile":profile
    }
    return render(request, 'web/home.html',context)

def modify(request):
    form = UserPreferencesForm(request.POST or None)
    context = {
        "is_modify" : True,
        "form":form
        
    }
    return render(request, 'web/modify.html',context)


def likesyou(request):
    form = UserPreferencesForm(request.POST or None)
    context = {
        "is_likesyou" : True
        
    }
    return render(request, 'web/likesyou.html',context)


