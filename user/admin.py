from django.contrib import admin

from . import models
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext as _

import user
 # Register your models here.

# class UserAdmin(BaseUserAdmin):
#     ordering = ['id']
#     list_display = ['email']
#     fieldsets = (
#         (None, {'fields': ('email', 'password')}),
#         (_('Personal Info'), {'fields': ()}),
#         (
#             _('Permissions'),
#             {
#                 'fields': ('is_active', 'is_staff', 'is_superuser')
#             }
#         ),
#         (_('Importand dates'), {'fields': ('last_login',)})
#     )
#     add_fieldsets = (
#         (None, {
#             'classes': ('wide',),
#             'fields': ('email', 'password1', 'password2')
#         }),
#     )
admin.site.register(models.User)


class ImageInline(admin.TabularInline):
    model = models.Image
    

@admin.register(models.UserProperties)
class UserPropertiesAdmin(admin.ModelAdmin):
    list_display = ('image','name','user','gender','martialStatus','moblie')
    inlines=[
        ImageInline,
    ]

@admin.register(models.Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ('is_verified','nmId','Name','Phone_number','Gender','user','image','Highest_Education','profession','Religious_Status','nativeCity')
    
  
    def Phone_number(self,obj):
        return obj.profile.moblie
    def Highest_Education(self,obj):
        return obj.education.highestEducation
    def Gender(self,obj):
        return obj.profile.gender
    def Name(self,obj):
        return obj.profile.name
    def profession(self,obj):
        return obj.education.profession
    def Religious_Status(self,obj):
        return obj.education.religiousness
    def nativeCity(self,obj):
        return obj.education.nativeCity




@admin.register(models.UserEducationLocationContact)
class UserEducationLocationContactAdmin(admin.ModelAdmin):
    list_display = ('image','user','performNamaz','religiousness','readQuran','attendIslamicServices')
    inlines=[
        ImageInline,
    ]
    
# @admin.register(models.UserProperties)
# class UserPropertiesAdmin(admin.ModelAdmin):
#     list_display = ('name','user')
admin.site.register(models.LikeProfile)

  

