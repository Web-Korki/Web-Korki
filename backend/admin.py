from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Teacher, Email, EmailFooter


admin.site.register(Teacher, UserAdmin)
admin.site.register(Email)
admin.site.register(EmailFooter)
