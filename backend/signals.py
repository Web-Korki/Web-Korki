from django.dispatch import receiver
from django.db.models import signals
from .models import Lesson, Teacher
from datetime import timedelta
from .notifications import NotificationEmail


@receiver(signals.post_save, sender=Lesson)
def send_mail(sender, instance, created, **kwargs):
    # to test if the signal is working
    if created and instance.teacher is None:
        print("signal send")
        start_lesson_time = instance.datetime
        end_lesson_time = instance.datetime + timedelta(hours=1)
        busy_teachers = [
            lesson.teacher
            for lesson in Lesson.objects.filter(
                datetime__gte=start_lesson_time, datetime__lte=end_lesson_time
            )
        ]
        free_teachers = [
            teacher.email
            for teacher in Teacher.objects.filter(is_active=True)
            if teacher not in busy_teachers
        ]
        NotificationEmail.send(to=free_teachers)

        ##TODO: Signals and sending substitution mail
