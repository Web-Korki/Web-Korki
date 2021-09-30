from rest_framework import routers
from backend.views import *


router = routers.SimpleRouter()
router.register(r'lessons', LessonViewSet, basename='lessons')
router.register(r'lessons/cancel_lesson/<lesson_id>', CancelLessonViewSet, basename='cancel_lesson')
router.register(r'lessons/create_substitution', SubstitutionViewSet, basename='create_substitution')
router.register(r'lessons/assign_teacher/<lesson_id>', AssignTeacherViewSet, basename='assign_teacher')
router.register(r'houses', HouseViewSet, basename='houses')
router.register(r'students', StudentViewSet, basename='students')
