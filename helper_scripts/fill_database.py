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

from backend.models import Lesson, Teacher, House, Student
from backend.models import SUBJECT_CHOICES, LEVEL_CHOICES, CANCEL_REASONS

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
subjects = [item[0] for item in SUBJECT_CHOICES]
levels = [item[0] for item in LEVEL_CHOICES]
cancel_reasons = [item[0] for item in CANCEL_REASONS]


# Utils
def get_random_date(start_date, end_date):
    time_between_dates = end_date - start_date
    days_between_dates = time_between_dates.days
    random_number_of_days = random.randrange(days_between_dates)
    random_date = start_date + dt.timedelta(days=random_number_of_days)
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
        t = Teacher(subjects=subs, username=username)
        t.save()


def add_lessons(n=1, start_date=dt.datetime(2021, 1, 1), end_date=dt.datetime.today()):
    print(
        "adding {} lessons in interval from {} to {}...".format(
            n, start_date.strftime("%Y.%m.%d"), end_date.strftime("%Y.%m.%d")
        )
    )
    for i in range(n):
        teacher = get_random_from_model(Teacher)
        student = get_random_from_model(Student)
        lvl = random.choice(levels)
        date = get_random_date(start_date, end_date)
        subject = random.choice(subjects)

        cancel_reason = None
        percent = random.random()
        is_canceled = percent > 0.75
        if is_canceled:
            cancel_reason = random.choice(cancel_reasons)

        l = Lesson(
            teacher=teacher,
            student=student,
            level=lvl,
            datetime=date,
            subject=subject,
            is_canceled=is_canceled,
            cancel_reason=cancel_reason,
        )
        l.save()

        if i > 0 and i % 1000 == 0:
            print("{} lessons added from {} - {}%".format(i, n, i / n * 100))


def add_batch(n=1):
    """
    This function fills database with values like showed in functions below.
    The order in functions is important here!
    """
    for _ in range(n):
        add_random_houses(3)
        add_students(100)
        add_teachers(10)
        add_lessons(10000)


if __name__ == "__main__":
    number = 1
    if len(sys.argv) > 1:
        number = int(sys.argv[1])
    add_batch(number)

    # add_random_houses(2)
    # add_students(10)
    # add_teachers(5)
    # add_lessons(50, dt.datetime(2021, 2, 1), dt.datetime(2021, 2, 28))
