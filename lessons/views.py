from rest_framework import status, permissions
from rest_framework.views import APIView, Response
from rest_framework.generics import (
    RetrieveUpdateDestroyAPIView,
    ListAPIView,
    CreateAPIView,
)
from .models import Lesson
from .serializers import LessonSerializer


from rest_framework import status, permissions, viewsets
from rest_framework.decorators import action
from .models import Lesson
from .serializers import LessonSerializer


class LessonViewSet(viewsets.ModelViewSet):

    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = LessonSerializer

    def get_queryset(self):
        return Lesson.objects.all()

    @action(detail=True, url_path=r'lessons/?P<lesson_id>.*/$', url_name='lesson-detail')
    def get_user(self, request, lesson_id=None):
        return Lesson.objects.filter(id=lesson_id)

# class LessonView(RetrieveUpdateDestroyAPIView):
#     permission_classes = (permissions.IsAuthenticated,)
#
#     def get(self, request, **kwargs):
#         lesson_id = self.kwargs.get('lesson_id')
#         lesson = Lesson.objects.get(id=lesson_id)
#         serializer = LessonSerializer(lesson)
#         json = serializer.data
#         return Response(json, status=status.HTTP_200_OK)
#
#     def update(self, request, *args):
#         lesson = Lesson.objects.get(id=args)
#         serializer = LessonSerializer(instance=lesson, data=request.data)
#         if serializer.is_valid():
#             lesson = serializer.save()
#             if lesson:
#                 json = serializer.data
#                 return Response(json, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     def delete(self, request, *args):
#         lesson = Lesson.objects.get(id=args)
#         serializer = LessonSerializer(instance=lesson, data=request.data)
#         if serializer.is_valid():
#             lesson.delete()
#             return Response("User deleted", status=status.HTTP_200_OK)
#         else:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#
# class LessonList(ListAPIView):
#     permission_classes = (permissions.IsAuthenticated,)
#
#     def get(self, request, *args):
#         lessons_list = Lesson.objects.all()
#         serializer = LessonSerializer(lessons_list, many=True)
#         json = serializer.data
#         return Response(json)
#
#
# class UserLessonList(ListAPIView):
#     permission_classes = (permissions.IsAuthenticated,)
#
#     def get(self, request, teacher_id, *args):
#         lessons_list = Lesson.objects.get(teacher_id=args)
#         serializer = LessonSerializer(lessons_list, many=True)
#         json = serializer.data
#         return Response(json)
#
#
# class LessonCreate(CreateAPIView):
#     permission_classes = (permissions.AllowAny,)
#
#     def post(self, request, *args):
#         serializer = LessonSerializer(data=request.data)
#         if serializer.is_valid():
#             lesson = serializer.save()
#             if lesson:
#                 json = serializer.data
#                 return Response(json, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
