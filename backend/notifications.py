from django.core.mail import send_mail
from myapp.settings import EMAIL_HOST_USER, EMAIL_HOST_PASSWORD, EMAIL_HOST, EMAIL_PORT
from django.contrib.auth.tokens import default_token_generator
from djoser import email
import os
from djoser import utils
from djoser.conf import settings
from myapp.settings import BASE_DIR
from templated_mail import mail
from pathlib import Path

# subject = 'Hello from WK'
# sender = EMAIL_HOST_USER
# recipients = ["toms.hawkesky@gmail.com"]
# text = 'Cześć z django'
#
# send_mail(subject, text, sender,recipients, fail_silently=False)

user = None


class NotificationEmail(mail.BaseEmailMessage):
    template_name = Path("backend/templates/substitution_needed.html")

    def get_context_data(self):
        context = super().get_context_data()


# class ActivationEmail(email.ActivationEmail):
#     template_name = os.path.join(BASE_DIR, "backend", "templates", "activation.html")

class ActivationEmail(mail.BaseEmailMessage):
    template_name = os.path.join(BASE_DIR, "backend", "templates", "activation.html")

    def get_context_data(self):
        # ActivationEmail can be deleted
        context = super().get_context_data()

        global user
        user = context.get("user")
        print(user.pk)

        context["uid"] = utils.encode_uid(user.pk)
        context["token"] = default_token_generator.make_token(user)
        context["url"] = settings.ACTIVATION_URL.format(**context)
        return context




