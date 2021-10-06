import os, django
os.environ["DJANGO_SETTINGS_MODULE"] = "myapp.settings"
django.setup()
import pytest
from rest_framework import status
from django.urls import reverse
from tests.utils import *

@pytest.mark.django_db
def get_user_me(client: Client):
    url = reverse("teacher-me")
    return client.get(url)

@pytest.mark.django_db
def test_me_path_success(client: Client):
    r_user = get_random_logged_user(client)
    r_user_me = get_user_me(client)
    assert r_user_me.status_code == status.HTTP_200_OK

@pytest.mark.django_db
def test_me_path_failure(client: Client):
    r_user = get_user_me(client)
    assert r_user.status_code == status.HTTP_401_UNAUTHORIZED