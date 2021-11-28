import os, django

os.environ["DJANGO_SETTINGS_MODULE"] = "myapp.settings"
django.setup()
import pytest
from rest_framework import status
from backend.models import Teacher
from backend.serializers import *
from tests.utils import *


##TODO Write tests


@pytest.mark.django_db
def test_registration(client: Client):
    username = get_random_username()
    email = get_random_email()
    r = register_sample_user(client, username, email)
    assert r.status_code == status.HTTP_201_CREATED
    assert Teacher.objects.count() == 1
    assert Teacher.objects.get().username == username


@pytest.mark.django_db
def test_activation(client: Client):
    username = get_random_username()
    email = get_random_email()
    r = register_sample_user(client, username, email)
    user = Teacher.objects.get(username=username)
    r2 = activate_sample_user(client, user)
    assert r2.status_code == status.HTTP_200_OK
    assert Teacher.objects.get(username=username).is_active == True


@pytest.mark.django_db
def test_login_unregistered(client: Client):
    r = login_sample_user(client, get_random_username(), get_random_password())
    assert r.status_code == status.HTTP_401_UNAUTHORIZED


@pytest.mark.django_db
def test_registration_nonunique_email(client: Client):
    username = get_random_username()
    username2 = get_random_username()
    email = get_random_email()
    r = register_sample_user(client, username, email)
    r2 = register_sample_user(client, username2, email)
    assert r2.status_code == status.HTTP_400_BAD_REQUEST


@pytest.mark.django_db
def test_register_wrong_email(client: Client):
    r = register_sample_user(client, "testname", "notaemail")
    assert r.status_code == status.HTTP_400_BAD_REQUEST


@pytest.mark.django_db
def test_login_user_not_activated(client: Client):
    username = get_random_username()
    email = get_random_email()
    password = get_random_password()
    r = register_sample_user(client, username, email)
    r2 = login_sample_user(client, username, password)
    assert r2.status_code == status.HTTP_401_UNAUTHORIZED


@pytest.mark.django_db
def test_login_user_activated(client: Client):
    username = get_random_username()
    email = get_random_email()
    r = register_sample_user(client, username, email)
    user = Teacher.objects.get(username=username)
    r2 = activate_sample_user(client, user)
    r3 = set_password(client, user)
    r4 = login_sample_user(client, username, "somestrongpassword123")
    assert r4.status_code == status.HTTP_200_OK
