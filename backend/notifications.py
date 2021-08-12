from django.core.mail import send_mail
from myapp.settings import EMAIL_HOST_USER, EMAIL_HOST_PASSWORD, EMAIL_HOST, EMAIL_PORT

subject = 'Hello from WK'
sender = EMAIL_HOST_USER
recipients = ["toms.hawkesky@gmail.com"]
text = 'Cześć z django'

send_mail(subject, text, sender,recipients, fail_silently=False)