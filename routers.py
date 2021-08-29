from rest_framework import routers
from backend.views import *

# from knox import views as knox_views

router = routers.SimpleRouter()
router.register(r"auth/register", RegisterViewSet, basename="register")
router.register(r"auth/login", LoginView, basename="login")
router.register(r"users", CustomUserViewSet, basename="users")
router.register(r"lessons", LessonViewSet, basename="lessons")
router.register(
    r"lessons/create_substitution/<canceled_lesson_id>",
    SubstitutionViewSet,
    basename="substitution",
)
router.register(
    r"lessons/assign_teacher/<lesson_id>",
    AssignTeacherViewSet,
    basename="assign_teacher",
)
router.register(r"houses", HouseViewSet, basename="houses")
router.register(r"students", StudentViewSet, basename="students")
