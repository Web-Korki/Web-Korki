from rest_framework import routers
from accounts.views import CustomUserViewSet
from lessons.views import LessonViewSet
from houses.views import HouseViewSet

router = routers.SimpleRouter()
router.register(r'users', CustomUserViewSet, basename='user')
router.register(r'lessons', LessonViewSet, basename='lesson')
router.register(r'houses', HouseViewSet, basename='lesson')