from rest_framework import routers
from backend.views import *


router = routers.SimpleRouter()
router.register(r"lessons", LessonViewSet, basename="lessons")
router.register(r"houses", HouseViewSet, basename="houses")
router.register(r"students", StudentViewSet, basename="students")

# Substitutions
router.register(
    r"substitutions/create", CreateSubstitutionView, basename="create_substitution"
)
router.register(
    r"substitutions/assign_teacher", AssignTeacherView, basename="assign_teacher"
)
router.register(r"substitutions", SubstitutionsView, basename="substitutions")

#Change password at first login
router.register(r"change_default_password", ChangePasswordAfterRegister, basename="change_default_password")
