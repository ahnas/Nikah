from django import forms
from django.db.models import fields
from django.forms.models import fields_for_model
from django.utils.translation import ugettext_lazy as _
from .models import Image, UserProperties,UserEducationLocationContact,UserPreferences
from django.forms.widgets import SelectMultiple, TextInput, Textarea, EmailInput, CheckboxInput,URLInput, Select, NumberInput, RadioSelect, FileInput



class UserPropertiesForm(forms.ModelForm):
    class Meta:
        model = UserProperties
        fields = '__all__' 
        widgets = { 
            'profileCreated': Select(attrs={'id':'profileCreated','name':'profileCreated','class': 'required form-control'}),
            'gender': Select(attrs={'name':'gender','id':'gender','class': 'required form-control'}),
            'martialStatus': Select(attrs={'id':'martialStatus','name':'martialStatus','class': 'required form-control'}),
            'bodyType': Select(attrs={'id':'bodyType','name':'bodyType','class': 'required form-control'}),
            'community': Select(attrs={'id':'community','name':'community','class': 'required form-control'}),
            'preferredProfile': Select(attrs={'id':'preferredProfile','name':'preferredProfile','class': 'required form-control'}),
            'nationality': TextInput(attrs={'id':'nationality','name':'nationality','class': 'required form-control','value':'Indian'}),
            'motherTongue': TextInput(attrs={'id':'motherTongue','name':'motherTongue','class': 'required form-control','placeholder':'Mother tongue'}),
            
            'fatherOccupation': TextInput(attrs={'id':'fatherOccupation','name':'fatherOccupation','class': 'required form-control','placeholder':'fatherOccupation'}),
            'motherOccupation': TextInput(attrs={'id':'motherOccupation','name':'motherOccupation','class': 'required form-control','placeholder':'motherOccupation'}),
            'financialStatus': Select(attrs={'id':'motherOccupation','name':'motherOccupation','class': 'required form-control','placeholder':'financialStatus'}),
            'brothers': NumberInput(attrs={'id':'brothers','name':'brothers','class': 'required form-control','value':'0'}),
            'sisters': NumberInput(attrs={'id':'sisters','name':'sisters','class': 'required form-control','value':'0'}),
            'smoking': Select(attrs={'id':'smoking','name':'smoking','class': 'required form-control'}),
            'drinking': Select(attrs={'id':'drinking','name':'drinking','class': 'required form-control'}),
            'height': NumberInput(attrs={'id':'height','name':'height','class': 'required form-control'}),
            'weight': NumberInput(attrs={'id':'weight','name':'weight','class': 'required form-control'}),
            'complexion': Select(attrs={'id':'complexion','name':'complexion','class': 'required form-control'}),

        }

class UserEducationLocationContactForm(forms.ModelForm):
    class Meta:
        model = UserEducationLocationContact
        fields = '__all__' 
        widgets = { 
            'performNamaz': Select(attrs={'id':'performNamaz','name':'performNamaz','class': 'required form-control'}),
            'readQuran': Select(attrs={'id':'readQuran','name':'readQuran','class': 'required form-control'}),
            'attendIslamicServices': Select(attrs={'id':'attendIslamicServices','name':'attendIslamicServices','class': 'required form-control'}),
        }

class UserPreferencesForm(forms.ModelForm):
    class Meta:
        model = UserPreferences
        fields = '__all__' 
        widgets = { 
            'community': Select(attrs={'id':'community','name':'community','class': 'form-control'}),
            'ageFrom': NumberInput(attrs={'id':'ageFrom','name':'ageFrom','class': 'form-control','value':0}),
            'ageTo': NumberInput(attrs={'id':'ageTo','name':'ageTo','class': 'form-control','value':0}),
            'martialStatus': Select(attrs={'id':'martialStatus','name':'martialStatus','class': 'form-control'}),
            'bodyType': Select(attrs={'id':'bodyType','name':'bodyType','class': 'form-control'}),
            'heightFrom': NumberInput(attrs={'id':'heightFrom','name':'heightFrom','class': 'form-control','value':0}),
            'heightTo': NumberInput(attrs={'id':'heightTo','name':'heightTo','class': 'form-control','value':0}),
            'weightFrom': NumberInput(attrs={'id':'weightFrom','name':'weightFrom','class': 'form-control','value':0}),
            'weightTo': NumberInput(attrs={'id':'weightTo','name':'weightTo','class': 'form-control','value':0}),
            'profession': TextInput(attrs={'id':'profession','name':'profession','class': 'form-control'}),
            'smoking': Select(attrs={'id':'smoking','name':'smoking','class': 'form-control'}),
            'drinking': Select(attrs={'id':'drinking','name':'drinking','class': 'form-control'}),
            'complexion': Select(attrs={'id':'complexion','name':'complexion','class': 'form-control'}),
        }
        
