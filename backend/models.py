from django.db import models
from multiselectfield import MultiSelectField
from django.contrib.auth.models import AbstractUser
from django.contrib.contenttypes.models import ContentType


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


def get_subject_full_name(id):
    subject = Subject.objects.get(id=id)
    return subject.name


def get_level_full_name(id):
    level = Level.objects.get(id=id)
    return level.name


def get_cancel_reason_full_name(id):
    cancel_reason = CancelReason.objects.get(id=id)
    return cancel_reason.name


CANCEL_REASON_HOUSE = "by_house"
CANCEL_REASON_PROJECT = "by_project"

CANCEL_REASONS = (
    (CANCEL_REASON_HOUSE, "Odwołano przez dom dziecka"),
    (CANCEL_REASON_PROJECT, "Odwołano przez projekt/nauczyciela"),
)


# Create your models here.


class Level(models.Model):
    name = models.CharField(max_length=150)

    def __str__(self):
        return self.name


class Subject(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class CancelReason(models.Model):
    name = models.CharField(max_length=300)

    def __str__(self):
        return self.name


class Teacher(AbstractUser):
    class Meta:
        permissions = [
            ("reading_reports", "Can read_reports"),
        ]

    subjects = models.ManyToManyField(Subject)
    is_resetpwd = models.BooleanField(default=False)
    fb_name = models.CharField(null=True, blank=True, max_length=250)

    def __str__(self):
        return self.username


Teacher._meta.get_field("email")._unique = True
Teacher._meta.get_field("email")._required = True


class House(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class Student(models.Model):
    first_name = models.TextField(max_length=100)
    alias = models.TextField(max_length=100)
    house = models.ForeignKey(House, on_delete=models.CASCADE)

    def __str__(self):
        return "Uczeń" + " " + self.first_name


class Lesson(models.Model):
    teacher = models.ForeignKey(
        Teacher,
        on_delete=models.CASCADE,
        related_name="teacher",
        null=True,
        blank=True,
    )
    student = models.ForeignKey(Student, on_delete=models.PROTECT)
    house = models.ForeignKey(House, on_delete=models.PROTECT)
    level = models.ForeignKey(Level, on_delete=models.PROTECT)
    datetime = models.DateTimeField()
    subject = models.ForeignKey(Subject, on_delete=models.PROTECT)
    last_topics = models.TextField(max_length=300, null=True, blank=True)
    planned_topics = models.TextField(max_length=300, null=True, blank=True)
    is_canceled = models.BooleanField(null=True, blank=True)
    cancel_reason = MultiSelectField(null=True, blank=True, choices=CANCEL_REASONS)

    def save(self, *args, **kwargs):
        self.house = self.student.house
        super(Lesson, self).save(*args, **kwargs)

    def __str__(self):
        return "Lekcja dn., " + str(
            self.datetime.strftime("%d.%m.%Y") + " w " + self.student.house.name
        )


class Substitution(models.Model):
    """
    In this moment the Lesson model is not going to be used in the app.
    Thus the substitution has to inherit all its field instead just to refer to it.
    """

    # Should be lesson attrs
    old_teacher = models.ForeignKey(
        Teacher, on_delete=models.PROTECT, related_name="old_teacher"
    )
    level = models.CharField(max_length=300, choices=LEVEL_CHOICES)
    datetime = models.DateTimeField()
    subject = models.ForeignKey(Subject, on_delete=models.PROTECT)

    # Substitution specific
    new_teacher = models.ForeignKey(
        Teacher, on_delete=models.PROTECT, null=True, related_name="new_teacher"
    )
    new_teacher_found = models.BooleanField(default=False)

    # Substitution optional
    last_topics = models.TextField(max_length=300, null=True, blank=True)
    planned_topics = models.TextField(max_length=300, null=True, blank=True)
    methodology_and_platform = models.TextField(max_length=300, null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.new_teacher:
            self.new_teacher_found = True
        super(Substitution, self).save(*args, **kwargs)


class EmailFooter(models.Model):
    name = models.CharField(max_length=200, unique=True)
    text = models.TextField()

    def __str__(self):
        return self.name


class Email(models.Model):
    name = models.CharField(max_length=200, unique=True)
    title = models.CharField(max_length=200)
    text = models.TextField()
    footer = models.ForeignKey(EmailFooter, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.name
