from django.contrib.auth.tokens import default_token_generator
from djoser import utils
from djoser.conf import settings
from myapp.settings import BASE_DIR
from templated_mail import mail
from tests.utils import get_random_password
from backend.models import Teacher
import os


class NotificationEmail(mail.BaseEmailMessage):
    template_name = os.path.join(
        BASE_DIR, "backend", "templates", "substitution_needed.html"
    )

    def get_context_data(self):
        context = super().get_context_data()


class ActivationEmail(mail.BaseEmailMessage):
    template_name = os.path.join(BASE_DIR, "backend", "templates", "activation.html")

    def get_context_data(self):
        # ActivationEmail can be deleted
        context = super().get_context_data()
        user = context.get("user")
        password = get_random_password()
        obj = Teacher.objects.get(id=user.pk)
        obj.set_password(password)
        obj.save()
        context["uid"] = utils.encode_uid(obj.id)
        context["token"] = default_token_generator.make_token(obj)
        context["url"] = settings.ACTIVATION_URL.format(**context)
        context["password"] = password
        return context
