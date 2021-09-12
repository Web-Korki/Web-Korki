from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status, permissions, viewsets
from django.contrib.auth import login
from .serializers import *

from djoser.views import UserViewSet
from rest_framework.response import Response


class ActivateUser(UserViewSet):
    def get_serializer(self, *args, **kwargs):
        serializer_class = self.get_serializer_class()
        kwargs.setdefault("context", self.get_serializer_context())

        # this line is the only change from the base implementation.
        kwargs["data"] = {"uid": self.kwargs["uid"], "token": self.kwargs["token"]}

        return serializer_class(*args, **kwargs)

    def activation(self, request, uid, token, *args, **kwargs):
        super().activation(request, *args, **kwargs)
        return Response(status=status.HTTP_204_NO_CONTENT)


class TeacherViewSet(viewsets.ModelViewSet):

    serializer_class = TeacherListSerializer

    def get_queryset(self):
        return Teacher.objects.all()


# Login
class LoginView(viewsets.ModelViewSet):
    serializer_class = LoginSerializer
    http_method_names = ["post"]
    permission_classes = (permissions.AllowAny,)

    def generate_tokens(self, user):
        refresh = RefreshToken.for_user(user)
        return {
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        }

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        print(serializer)
        user = serializer.validated_data
        login(request, user)
        return Response(
            {
                "user": TeacherSerializer(
                    user, context=self.get_serializer_context()
                ).data,
                "tokens": self.generate_tokens(user),
            },
            status=status.HTTP_200_OK,
        )


class HouseViewSet(viewsets.ModelViewSet):

    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = HouseSerializer

    def get_queryset(self):
        return House.objects.all()


class LessonViewSet(viewsets.ModelViewSet):

    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = LessonSerializer

    def get_queryset(self):
        return Lesson.objects.all()

    # @action(detail=True, url_path=r"lessons/<lesson_id>", url_name="lesson-detail")
    # def get_lesson(self, request, lesson_id=None):
    #     return Lesson.objects.filter(id=lesson_id)


class CancelLessonViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = UpdateSubstitutionSerializer
    http_method_names = ["patch"]

    def update_stats(self, request, lesson_id):
        if request.reason == "by_project":
            teacher = Teacher.objects.get(
                id=Lesson.objects.get(id=lesson_id).teacher.id
            )
            teacher["lessons_canceled"] = +1
            teacher.save()
        else:
            house = House.objects.get(id=Lesson.objects.get(id=lesson_id).house.id)
            house["lessons_canceled"] = +1
            house.save()

    def update_canceled_lesson(self, canc_lesson_id, updated):
        lesson = Lesson.objects.get(id=canc_lesson_id)
        lesson_serializer = UpdateSubstitutionSerializer(data=lesson)
        LessonViewSet.update(
            LessonViewSet(),
            request=updated.data,
            partial=True,
            instance=lesson_serializer,
        )


class SubstitutionViewSet(viewsets.ModelViewSet):

    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = AddSubstitutionSerializer
    http_method_names = ["post"]

    def create(self, request, *args):
        substitution = AddSubstitutionSerializer(data=request.data)
        substitution.is_valid(raise_exception=True)
        self.perform_create(substitution)
        headers = self.get_success_headers(substitution.data)

        return Response(
            substitution.data, status=status.HTTP_201_CREATED, headers=headers
        )


class AssignTeacherViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = AssignTeacherSerializer
    http_method_names = ["post"]

    def partial_update(self, request, lesson_id=None, **kwargs):
        user = request.user
        queryset = Lesson.objects.get(id=lesson_id)
        serializer = self.get_serializer(
            queryset, data={"teacher": user.id}, partial=True
        )
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_200_OK, headers=headers)


class StudentViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated, permissions.IsAdminUser)
    serializer_class = StudentSerializer

    def get_queryset(self):
        return House.objects.all()
