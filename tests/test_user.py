import os, django

os.environ["DJANGO_SETTINGS_MODULE"] = "myapp.settings"
django.setup()
import pytest
from rest_framework import status
from tests.utils import *


@pytest.mark.django_db
def get_user_me(client: Client, token):
    url = reverse("teacher-me")
    return client.get(url, HTTP_AUTHORIZATION="Bearer {}".format(token))


@pytest.mark.django_db
def test_me_path_success(client: Client):
    user_header = get_random_logged_user(client)
    r_user_me = get_user_me(client, token=user_header.json()["access"])
    assert r_user_me.status_code == status.HTTP_200_OK


@pytest.mark.django_db
def test_me_path_failure(client: Client):
    r_user = get_user_me(client, token="sometoken")
    assert r_user.status_code == status.HTTP_401_UNAUTHORIZED


@pytest.mark.django_db
def test_get_user_info_unauthorized(client: Client):
    user_header1 = get_random_logged_user(client)
    user_header2 = get_random_logged_user(client)
    url = reverse("teacher-detail", kwargs={"id": 1})
    r = client.get(
        url, HTTP_AUTHORIZATION="Bearer {}".format(user_header2.json()["access"])
    )
    assert r.status_code == status.HTTP_404_NOT_FOUND
