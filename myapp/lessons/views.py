from rest_framework import status, permissions, viewsets
from rest_framework.decorators import action
from .models import Lesson
from .serializers import LessonSerializer

class LessonViewSet(viewsets.ModelViewSet):

    permission_classes = (permissions.AllowAny,)
    serializer_class = LessonSerializer

    def get_queryset(self):
        return Lesson.objects.all()

    @action(detail=True, url_path=r'users/?P<lesson_id>.*/$', url_name='lesson-detail')
    def get_user(self, request, lesson_id=None):
        return Lesson.objects.filter(id=lesson_id)

# Create your views here.
