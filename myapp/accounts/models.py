from django.db import models
from multiselectfield import MultiSelectField
from django.contrib.auth.models import AbstractUser

SUBJECT_CHOICES = (
    ("pol", "j. polski"),
    ("eng", "j. angielski"),
    ("ger", "j. niemiecki"),
    ("math", "matematyka"),
    ("phi", "fizyka"),
    ("bio", "biologia"),
)


# Create your models here.
class CustomUser(AbstractUser):
    subjects = MultiSelectField(choices=SUBJECT_CHOICES)
    lessons_taken = models.IntegerField(null=True)
    lessons_cancelled = models.IntegerField(null=True)

    def __str__(self):
        return self.username
