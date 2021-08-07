from django.db import models
from accounts.models import CustomUser
from houses.models import House
from multiselectfield import MultiSelectField

SUBJECT_CHOICES = (
    ("pol", "j. polski"),
    ("eng", "j. angielski"),
    ("ger", "j. niemiecki"),
    ("math", "matematyka"),
    ("phi", "fizyka"),
    ("bio", "biologia"),
)

LEVEL_CHOICES = (
    ("1sp", "1. klasa s.p."),
    ("2sp", "2. klasa s.p."),
    ("3sp", "3. klasa s.p."),
    ("4sp", "4. klasa s.p."),
    ("5sp", "5. klasa s.p."),
    ("6sp", "6. klasa s.p."),
    ("7sp", "7. klasa s.p."),
    ("8sp", "8. klasa s.p."),
    ("1lic", "1. klasa lic/tech"),
    ("2lic", "2. klasa lic/tech"),
    ("3lic", "3. klasa lic/tech"),
    ("4lic", "4. klasa lic/tech"),
    ("5tech", "1. klasa tech"),
)

CANCEL_REASONS = (
    ("cancel_house", "Odwołano przez dom dziecka"),
    ("cancel_project", "Odwołano przez projekt/nauczyciela"),
)

# Create your models here.


class Lesson(models.Model):
    teacher = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name="teacher", null=True, blank=True
    )
    house = models.ForeignKey(House, on_delete=models.CASCADE)
    student_level = MultiSelectField(choices=LEVEL_CHOICES)
    date = models.DateField()
    time = models.TimeField()
    subject = MultiSelectField(choices=SUBJECT_CHOICES)
    last_topics = models.TextField(max_length=300, null=True, blank=True)
    planned_topics = models.TextField(max_length=300, null=True, blank=True)
    is_canceled = models.BooleanField(null=True, blank=True)
    cancel_reason = MultiSelectField(null=True, blank=True, choices=CANCEL_REASONS)
    substitution = models.ForeignKey(
        "models.Lesson", null=True, blank=True, on_delete=models.CASCADE
    )

    def __str__(self):
        return "Lekcja dn., " + str(
            self.date.strftime("%d.%m.%Y")
            + " "
            + "godz. "
            + str(self.time.strftime("%H:%M"))
            + " w "
            + self.house.name
        )
