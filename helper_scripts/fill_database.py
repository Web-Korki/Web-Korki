# usage: python helper_scripts/fill_database.py (int)
# As the models are changing frequently under development, bo prepare to make changes in this script.

import sys, os, django
import random
import datetime as dt
from string import ascii_lowercase
from django.utils import timezone
import pytz

project_path = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
sys.path.insert(0, project_path)
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "myapp.settings")
django.setup()

from backend.models import (
    Substitution,
    Teacher,
    House,
    Student,
    Level,
    Subject,
    Email,
    EmailFooter,
)

# random.seed(1) # Change or comment it for different results

names = [
    "Maciek",
    "Patryk",
    "Justyna",
    "Wojtek",
    "Alicja",
    "Basia",
    "Antek",
    "Alicja",
    "Basia",
    "Antek",
    "Kacper",
    "Grzesiu",
    "Weronika",
    "Kasia",
    "Anotni",
    "Marysia",
    "Klaudia",
    "Mateusz",
]
cities = [
    "Warszawie",
    "Poznaniu",
    "Szczecinie",
    "Gdańsku",
    "Krakowie",
    "Lublinie",
    "Gdyni",
    "Sopocie",
    "Toruniu",
    "Bydgoszczy",
    "Przemyślu",
]

subjects = [
    "j. polski",
    "j. angielski",
    "j. niemiecki",
    "matematyka",
    "fizyka",
    "biologia",
    "chemia",
    "informatyka",
    "plastyka",
    "geografia",
    "historia",
]

levels = [
    "1. klasa s.p.",
    "2. klasa s.p.",
    "3. klasa s.p.",
    "4. klasa s.p.",
    "5. klasa s.p.",
    "6. klasa s.p.",
    "7. klasa s.p.",
    "8. klasa s.p.",
    "1. klasa lic/tech",
    "2. klasa lic/tech",
    "3. klasa lic/tech",
    "4. klasa lic/tech",
    "5. klasa tech",
]


# Utils
def get_random_date():
    raw_date = dt.datetime(
        year=2022,
        month=random.randint(2, 12),
        day=random.randint(1, 28),
        hour=random.randint(10, 24),
        minute=random.randint(10, 59),
    )
    random_date = dt.datetime.strftime(raw_date, "%Y-%m-%d %H:%M")
    return random_date


def get_random_from_model(model):
    objects = model.objects.all()
    return random.choice(objects)


def find_unique_name_for_student():
    aliases = list(ascii_lowercase)
    first_name = random.choice(names)
    alias = random.choice(aliases).upper()

    while True:
        s = Student.objects.all().filter(first_name=first_name, alias=alias)
        if len(s) == 0:
            return first_name, alias
        alias += random.choice(aliases)


# Core Functions
def add_sub_emails():
    sub_email = Email(
        name="SubstitutionEmail",
        title="ZASTĘPSTWO {{ site_name }} - {{ subject }} {{ week_day }} {{ time }} ({{ date }}) {{ level }}",
        text=""""
        Hej!

Jest potrzebne zastępstwo, aby dowiedzieć się szczegółów kliknij w poniższy link:

https://{{ domain }}/{{ url|safe }}substitutions/{{ substitution_id }}

Dziękujemy, że jesteś.
Zespół Web-Korki
""",
    )
    confirm_email = Email(
        name="SubstitutionConfirmEmail",
        title="{{ site_name }} Twoje zastępstwo w dniu ({{ date }}) o godzinie {{ time }} zostało przejęte",
        text="Nowy nauczyciel - {{ new_teacher }}",
    )
    sub_email.save()
    confirm_email.save()


def add_levels():
    print("adding levels....")
    for level_name in levels:
        obj = Level(name=level_name)
        obj.save()


def add_subjects():
    print("adding subjects....")
    for subject_name in subjects:
        obj = Subject(name=subject_name)
        obj.save()


def add_random_houses(n=1):
    print("adding {} houses...".format(n))

    for _ in range(n):
        name = "Dom dziecka numer {} w {}".format(
            random.randint(1, 10000), random.choice(cities)
        )
        h = House(name=name)
        h.save()


def add_students(n=1, house=False):
    print("adding {} students...".format(n))

    house_random = False
    if not house:
        house_random = True

    for _ in range(n):
        if house_random:
            houses = House.objects.all()
            house = random.choice(houses)

        student = find_unique_name_for_student()
        s = Student(first_name=student[0], alias=student[1], house=house)
        s.save()


def add_teachers(n=1):
    print("adding {} teachers...".format(n))
    for _ in range(n):
        subs = random.sample(subjects, k=random.randint(1, len(subjects)))
        is_unique = False
        while not is_unique:
            name = random.choice(list(ascii_lowercase)).upper()
            for _ in range(random.randint(2, 5)):
                name += random.choice(list(ascii_lowercase))
            username = random.choice(names) + " " + name
            u = Teacher.objects.all().filter(username=username)
            if len(u) == 0:
                is_unique = True
        email = "_".join(username.split()).lower() + "@.gmail.com"
        t = Teacher(username=username, email=email)
        t.save()


def add_subs(n=1):
    print("adding {} substitutions...".format(n))
    for i in range(n):

        lvl = random.randint(1, len(levels))
        date = get_random_date()
        subject = random.randint(1, len(subjects))
        old_teacher = random.randint(1, 11)

        s = Substitution(
            old_teacher=Teacher.objects.get(id=old_teacher),
            level=Level.objects.get(id=lvl),
            datetime=date,
            subject=Subject.objects.get(id=subject),
        )
        s.save()

        if i > 0 and i % 1000 == 0:
            print("{} lessons added from {} - {}%".format(i, n, i / n * 100))


def add_batch(n=1):
    """
    This function fills database with values like showed in functions below.
    The order in functions is important here!
    """
    for _ in range(n):
        add_subjects()
        add_levels()
        add_random_houses(3)
        add_students(100)
        add_teachers(10)
        add_subs(10000)


if __name__ == "__main__":
    number = 1
    if len(sys.argv) > 1:
        number = int(sys.argv[1])
    add_batch(number)

    # add_random_houses(2)
    # add_students(10)
    # add_teachers(5)
    # add_lessons(50, dt.datetime(2021, 2, 1), dt.datetime(2021, 2, 28))
