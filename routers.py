from rest_framework import routers
from backend.views import *


router = routers.SimpleRouter()
router.register(r"lessons", LessonViewSet, basename="lessons")
router.register(
    r"lessons/cancel_lesson/<lesson_id>", CancelLessonViewSet, basename="cancel_lesson"
)

# Substitutions
router.register(r"substitutions/create", CreateSubstitutionView, basename="create_substitution")
router.register(r"substitutions/assign_teacher", AssignTeacherView, basename="assign_teacher")
router.register(r"substitutions", SubstitutionsView, basename="substitutions")


# router.register(
#     r"lessons/assign_teacher/<lesson_id>",
#     AssignTeacherViewSet,
#     basename="assign_teacher",
# )
router.register(r"houses", HouseViewSet, basename="houses")
router.register(r"students", StudentViewSet, basename="students")
