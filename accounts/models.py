from django.db import models
from django.conf import settings
from multiselectfield import MultiSelectField

SUBJECT_CHOICES = (
    ("pol", "j. polski"),
    ("eng", "j. angielski"),
    ("ger", "j. niemiecki"),
    ("math", "matematyka"),
    ("phi", "fizyka"),
    ("bio", "biologia"),
)


# Create your models here.
class Account(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    id = models.AutoField(primary_key=True)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    subjects = MultiSelectField(choices=SUBJECT_CHOICES)
    lessons_taken = models.IntegerField()
    lessons_cancelled = models.IntegerField()

    def __str__(self):
        return self.lastname