from django.contrib.auth import authenticate
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import Teacher, House, Lesson, Student


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'


class TeacherListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = "__all__"


class RegistrationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True, required=True)
    subjects = serializers.CharField(required=True)

    class Meta:
        model = Teacher
        fields = ['email', 'username', 'password', 'subjects']

    def create(self, validated_data):
        user = Teacher.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
        )
        return user


class LoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    password = serializers.CharField()

    class Meta:
        model = Teacher
        fields = ["username", "password"]

    def validate(self, data):
        user = authenticate(**data)
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
