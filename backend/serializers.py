from django.contrib.auth import authenticate, get_user_model
from rest_framework import serializers
from .models import House, Lesson, Student, SUBJECT_CHOICES
from djoser.serializers import UserCreateSerializer

Teacher = get_user_model()


class UserRegisterSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = Teacher
        fields = ("email", "username", "password", "subjects")


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = "__all__"

# TODO do we need this ? Commented on 30.09.2021
# class TeacherListSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Teacher
#         fields = "__all__"


class LoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    password = serializers.CharField()

    class Meta:
        model = Teacher
        fields = ["username", "password"]

    def validate(self, data):
        username = data.get("username", None)
        password = data.get("password", None)
        user = authenticate(username=username, password=password)
        if user and user.is_active:
            return user

        raise serializers.ValidationError("Incorrent login data")


class HouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = House
        fields = "__all__"


class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = "__all__"


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"


class AddSubstitutionSerializer(serializers.ModelSerializer):
    last_topics = serializers.CharField(required=True)
    planned_topics = serializers.CharField(required=True)
    teacher = serializers.IntegerField(required=True)
    house = serializers.IntegerField(required=True)

    class Meta:
        model = Lesson
        exclude = ("is_canceled", "cancel_reason", "substitution")


class UpdateSubstitutionSerializer(serializers.ModelSerializer):

    is_canceled = serializers.BooleanField(required=True)
    cancel_reason = serializers.CharField(required=True)
    substitution = serializers.CharField(required=True)

    class Meta:
        model = Lesson
        fields = [
            "last_topics",
            "planned_topics",
            "is_canceled",
            "cancel_reason",
            "substitution",
        ]


class AssignTeacherSerializer(serializers.ModelSerializer):
    class Meta:

        model = Lesson
        fields = ["teacher"]
