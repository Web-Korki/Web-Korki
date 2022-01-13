import os, django
from model_bakery import baker

os.environ["DJANGO_SETTINGS_MODULE"] = "myapp.settings"
django.setup()

import pytest
from django.urls import reverse_lazy
from tests.utils import model_view_set_test
from backend.models import Level, Subject, Student, House
from datetime import date, timedelta

houses_list_url = reverse_lazy("api:houses-list")
lessons_list_url = reverse_lazy("api:lessons-list")
students_list_url = reverse_lazy("api:students-list")


@pytest.mark.django_db
def test_houses(client):
    data = {"name": "test"}
    data_modified = {"name": "test2"}
    """ Standard rest_framework.viewsets.ModelViewSet test """
    model_view_set_test(
        client, houses_list_url, data, data_modified, admin_required=True
    )


@pytest.mark.django_db
def test_lessons(client):
    """ Standard rest_framework.viewsets.ModelViewSet test """
    student = baker.make(Student)
    level = baker.make(Level)
    subject = baker.make(Subject)
    d = date.today()
    date_modified = d + timedelta(5)

    data = {
        "datetime": d.strftime("%Y-%m-%dT%H:%M"),
        "student": student.id,
        "level": level.id,
        "subject": subject.id,
    }
    data_modified = data.copy()
    data_modified["datetime"] = date_modified.strftime("%Y-%m-%dT%H:%M")

    model_view_set_test(client, lessons_list_url, data, data_modified)


@pytest.mark.django_db
def test_students(client):
    """ Standard rest_framework.viewsets.ModelViewSet test """
    house = baker.make(House)

    data = {"first_name": "Test", "alias": "ttt", "house": house.id}
    data_modified = data.copy()
    data_modified["first_name"] = "Test2"

    model_view_set_test(
        client, students_list_url, data, data_modified, admin_required=True
    )
