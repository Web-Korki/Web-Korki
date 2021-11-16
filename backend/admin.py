from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Teacher, Email, EmailFooter, Subject, Level

UserAdmin.list_display = ("username", "email", "fb_name", "is_active", "is_staff")
UserAdmin.fieldsets[1][1]["fields"] += ("fb_name",)
UserAdmin.fieldsets += ((("Przedmioty"), {"fields": ("subjects",)}),)

admin.site.register(Teacher, UserAdmin)
admin.site.register(Email)
admin.site.register(EmailFooter)
admin.site.register(Subject)
admin.site.register(Level)
