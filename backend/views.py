from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status, permissions, viewsets
from rest_framework.views import Response
from .serializers import *
from .notifications import *


class CustomUserViewSet(viewsets.ModelViewSet):

    serializer_class = TeacherListSerializer
    http_method_names = ["put", "patch", "delete"]

    def get_queryset(self):
        return Teacher.objects.all()


# Registration
class RegisterViewSet(viewsets.ModelViewSet):
    serializer_class = RegistrationSerializer
    http_method_names = ["post"]
    permission_classes = (permissions.AllowAny,)

    def generate_tokens(self, user):
        refresh = RefreshToken.for_user(user)
        return {
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        }

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            # send_mail(subject, text, sender, recipients, fail_silently=False)
            return Response(
                {
                    "user": TeacherSerializer(
                        user, context=self.get_serializer_context()
                    ).data,
                    "tokens": self.generate_tokens(user),
                },
                status=status.HTTP_201_CREATED,
            )
        else:
            return Response({"error": serializer.errors})


# Login
class LoginView(viewsets.ModelViewSet):
    serializer_class = LoginSerializer
    http_method_names = ["post"]
    permission_classes = (permissions.AllowAny,)

    def generate_tokens(self, user):
        refresh = RefreshToken.for_user(user)
        return {
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        }

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response(
            {
                "user": TeacherSerializer(user).data,
                "tokens": self.generate_tokens(user),
            },
            status=status.HTTP_200_OK,
        )


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
    serializer_class = AddSubstitutionSerializer
    http_method_names = ["post"]

    def update_stats(self, reason, canc_teacher_id, canc_house_id):
        if reason == "by_project":
            teacher = Teacher.objects.get(id=canc_teacher_id)
            teacher["lessons_canceled"] = +1
            teacher.save()
        else:
            house = House.objects.get(id=canc_house_id)
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
        self.update_stats(
            reason=updated.data["cancel_reason"],
            canc_teacher_id=canc_lesson_id.teacher__id,
            canc_house_id=canc_lesson_id.house__id,
        )

    def create(self, request, canceled_lesson_id=None, **kwargs):
        substitution = AddSubstitutionSerializer(data=request.data)
        substitution.is_valid(raise_exception=True)
        self.perform_create(substitution)
        headers = self.get_success_headers(substitution.data)
        self.update_canceled_lesson(canceled_lesson_id, substitution.data)

        return Response(
            substitution.data, status=status.HTTP_201_CREATED, headers=headers
        )


class AssignTeacherViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = AssignTeacherSerializer
    http_method_names = ["post"]

    def partial_update(self, request, lesson_id=None, **kwargs):
        user = request.user
        queryset = Lesson.objects.get(id=lesson_id)
        serializer = self.get_serializer(
            queryset, data={"teacher": user.id}, partial=True
        )
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_200_OK, headers=headers)


class StudentViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated, permissions.IsAdminUser)
    serializer_class = StudentSerializer

    def get_queryset(self):
        return House.objects.all()
