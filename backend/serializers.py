from rest_framework import serializers
from .models import CustomUser, House, Lesson


class CustomUserSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(required=True)
    username = serializers.CharField()
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = CustomUser
        fields = "__all__"

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        instance = self.Meta.model(
            **validated_data
        )  # as long as the fields are the same, we can just use this
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class CustomUserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = "__all__"


class HouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = House
        fields = "__all__"


class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = "__all__"


class SubstitutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ["is_canceled", "cancel_reason", "substitution"]

class AssignTeacherSerializer(serializers.ModelSerializer):
    class Meta:

        model = Lesson
        fields = ["teacher"]

