from django.core.mail import send_mail
from myapp.settings import EMAIL_HOST_USER, EMAIL_HOST_PASSWORD, EMAIL_HOST, EMAIL_PORT
from djoser import email
import os
from myapp.settings import BASE_DIR
from templated_mail import mail

# subject = 'Hello from WK'
# sender = EMAIL_HOST_USER
# recipients = ["toms.hawkesky@gmail.com"]
# text = 'Cześć z django'
#
# send_mail(subject, text, sender,recipients, fail_silently=False)

class NotificationEmail(mail.BaseEmailMessage):
    template_name = None#TODO

class ActivationEmail(email.ActivationEmail):
    template_name = os.path.join(BASE_DIR, 'backend\\templates\\activation.html')