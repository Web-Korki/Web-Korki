from rest_framework import routers
from backend.views import *


router = routers.SimpleRouter()
router.register(r'users', TeacherViewSet, basename='users')
router.register(r'lessons', LessonViewSet, basename='lessons')
router.register(r'lessons/create_substitution/<canceled_lesson_id>', SubstitutionViewSet, basename='substitution')
router.register(r'lessons/assign_teacher/<lesson_id>', AssignTeacherViewSet, basename='assign_teacher')
router.register(r'houses', HouseViewSet, basename='houses')
router.register(r'students', StudentViewSet, basename='students')
