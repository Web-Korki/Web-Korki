from django.contrib.auth import authenticate, get_user_model
from django.contrib.auth.password_validation import validate_password
from djoser.serializers import UserCreateSerializer as DjoserRegisterSerializer
from rest_framework import serializers
from .models import House, Lesson, Student, Substitution


Teacher = get_user_model()


class UserRegisterSerializer(DjoserRegisterSerializer):
    class Meta(DjoserRegisterSerializer.Meta):
        model = Teacher
        fields = ("email", "username")

    def validate(self, attrs):
        user = Teacher(**attrs)
        return attrs


class TeacherSerializer(serializers.ModelSerializer):
    lessons_done = serializers.SerializerMethodField("is_lessons_done")
    lessons_canceled = serializers.SerializerMethodField("is_lessons_canceled")

    def is_lessons_done(self, obj):
        return len(Lesson.objects.filter(teacher_id=obj.id))

    def is_lessons_canceled(self, obj):
        return len(Lesson.objects.filter(teacher_id=obj.id, is_canceled=True))

    class Meta:
        model = Teacher
        exclude = ("password",)
        # fields = "__all__"


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
    total_lessons_number = serializers.SerializerMethodField("is_lessons_number")
    canceled_lessons_number = serializers.SerializerMethodField("is_lessons_canceled")

    def is_lessons_number(self, obj):
        return len(Lesson.objects.filter(house_id=obj.id))

    def is_lessons_canceled(self, obj):
        return len(Lesson.objects.filter(house_id=obj.id, is_canceled=True))

    class Meta:
        model = House
        fields = "__all__"


class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        # House field is saved in model .save method. House is taken from student model.
        exclude = (
            "house",
        )  # This field acts the same as fields == "__all__" with except to mentioned field
        # fields = "__all__"


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


class SubstitutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Substitution
        fields = "__all__"

        # Save request.user instead
        extra_kwargs = {"old_teacher": {"required": False}}


class SubstitutionSerializerUpdate(serializers.ModelSerializer):
    class Meta:
        model = SubstitutionSerializer.Meta.model
        fields = SubstitutionSerializer.Meta.fields
        extra_kwargs = {
            **SubstitutionSerializer.Meta.extra_kwargs,
            **{
                "datetime": {"required": False},
                "level": {"required": False},
                "subject": {"required": False},
            },
        }

class ChangePasswordAfterRegisterSerializer(serializers.Serializer):
    """
    Serializer for password change endpoint.
    """
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
    fb_name = serializers.CharField(required=True)

    def validate_new_password(self, value):
        validate_password(value)
        return value