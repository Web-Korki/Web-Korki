from rest_framework.response import Response
from rest_framework import status, permissions, viewsets, mixins

from django.shortcuts import redirect, render, reverse
from django.contrib import messages
from djoser.conf import django_settings

from djoser.views import UserViewSet
from djoser import signals, utils
from djoser.compat import get_user_email
from djoser.conf import settings

from tests.utils import get_random_password
from myapp.settings import BASE_DIR
from .serializers import *
import requests, os
from .substitutions import create_substitution, assign_teacher, user_can_modify, cannot_modify_response, teacher_already_assigned_response


class Register(UserViewSet):
    def perform_create(self, serializer):
        password = get_random_password()
        serializer["password"] = password
        user = serializer.save()
        signals.user_registered.send(
            sender=self.__class__, user=user, request=self.request
        )

        context = {"user": user}
        to = [get_user_email(user)]
        if settings.SEND_ACTIVATION_EMAIL:
            settings.EMAIL.activation(self.request, context).send(to)
        elif settings.SEND_CONFIRMATION_EMAIL:
            settings.EMAIL.confirmation(self.request, context).send(to)


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

    def get_queryset(self):
        pass

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


# class SubstitutionViewSet(viewsets.ModelViewSet):
#
#     permission_classes = (permissions.IsAuthenticated,)
#     serializer_class = AddSubstitutionSerializer
#     http_method_names = ["post"]
#
#     def create(self, request, *args):
#         substitution = AddSubstitutionSerializer(data=request.data)
#         substitution.is_valid(raise_exception=True)
#         self.perform_create(substitution)
#         headers = self.get_success_headers(substitution.data)
#
#         return Response(
#             substitution.data, status=status.HTTP_201_CREATED, headers=headers
#         )
#
#
# class AssignTeacherViewSet(viewsets.ModelViewSet):
#     permission_classes = (permissions.IsAuthenticated,)
#     serializer_class = AssignTeacherSerializer
#     http_method_names = ["post"]
#
#     def partial_update(self, request, lesson_id=None, **kwargs):
#         user = request.user
#         queryset = Lesson.objects.get(id=lesson_id)
#         serializer = self.get_serializer(
#             queryset, data={"teacher": user.id}, partial=True
#         )
#         serializer.is_valid(raise_exception=True)
#         self.perform_update(serializer)
#         headers = self.get_success_headers(serializer.data)
#         return Response(serializer.data, status=status.HTTP_200_OK, headers=headers)


class StudentViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated, permissions.IsAdminUser)
    serializer_class = StudentSerializer

    def get_queryset(self):
        return House.objects.all()


def index(request):
    """
    Renders built frontend application.
    """
    return render(request, os.path.join("build", "index.html"))


# SUBSTITUTION VIEWS

class SubstitutionsView(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)  # Should already be set by default
    serializer_class = SubstitutionSerializer
    http_method_names = ["get", "put", "delete"]

    def get_queryset(self):
        if "only_pending" in self.request.data:
            if self.request.data["only_pending"].lower() == "true":
                return Substitution.objects.filter(new_teacher_found=False)
        return Substitution.objects.all()

    def update(self, request, *args, **kwargs):
        self.serializer_class = SubstitutionSerializerUpdate
        partial = kwargs.pop('partial', False)
        instance = self.get_object()

        # Assert substitution belongs to the request user or request user is admin
        if not user_can_modify(request, instance):
            return cannot_modify_response

        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        # Assert substitution belongs to the request user or request user is admin
        if not user_can_modify(request, instance):
            return cannot_modify_response
        self.perform_destroy(instance)
        return Response(status=status.HTTP_200_OK)


class CreateSubstitutionView(SubstitutionsView):
    http_method_names = ["post"]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return create_substitution(request)


class AssignTeacherView(SubstitutionsView):
    http_method_names = ["patch"]

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        substitution = self.get_object()
        if substitution.new_teacher_found:
            return teacher_already_assigned_response
        serializer = self.get_serializer(substitution, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)

        # Custom perform update
        assign_teacher(self.request, substitution)

        if getattr(substitution, '_prefetched_objects_cache', None):
            substitution._prefetched_objects_cache = {}

        return Response(serializer.data)
