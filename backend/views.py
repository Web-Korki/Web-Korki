from rest_framework import status, permissions, viewsets
from rest_framework.decorators import action
from rest_framework.views import Response
from .models import CustomUser, House, Lesson
from .serializers import *


class CustomUserViewSet(viewsets.ModelViewSet):

    serializer_class = CustomUserListSerializer

    def get_queryset(self):
        return CustomUser.objects.all()


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


class SubstitutionViewSet(viewsets.ModelViewSet):

    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = LessonSerializer, SubstitutionSerializer
    http_method_names = ["post"]

    def create(self, request, canceled_lesson_id=None, **kwargs):
        substitution = LessonSerializer(data=request.data)
        substitution.is_valid(raise_exception=True)
        self.perform_create(substitution)
        headers = self.get_success_headers(substitution.data)

        lesson = Lesson.objects.get(id=canceled_lesson_id)
        update_serializer = SubstitutionSerializer(data=lesson)
        LessonViewSet.update(LessonViewSet(), request=substitution.data, partial=True, instance=update_serializer)
        return Response(
            update_serializer.data, status=status.HTTP_201_CREATED, headers=headers
            )



class AssignTeacherViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = AssignTeacherSerializer
    http_method_names = ['put']

    def partial_update(self, request, lesson_id=None, **kwargs):
        user = request.user
        queryset = Lesson.objects.get(id=lesson_id)
        serializer = self.get_serializer(queryset, data={'teacher': user.id}, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_200_OK, headers=headers)

