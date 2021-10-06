from django.contrib.auth.tokens import default_token_generator
from django.test import Client
from django.urls import reverse
from djoser.utils import encode_uid
import random, string


# Utils
def register_sample_user(
    client: Client, username: str, email: str, password: str, re_password: str
):
    url = reverse("teacher-list")
    response = client.post(
        url,
        data={
            "username": username,
            "email": email,
            "password": password,
            "re_password": re_password,
        },
    )
    return response

def activate_sample_user(client: Client, user):
    uid = encode_uid(user.id)
    token = default_token_generator.make_token(user)
    url = reverse("activation", kwargs={'uid': uid, 'token': token})
    response = client.get(
        url
    )
    return response


def login_sample_user(client: Client, username: str, password: str):
    url = reverse("jwt-create")
    response = client.post(
        url,
        data={"username": username, "password": password},
    )
    return response


def get_random_email():
    return (
        "".join(random.choice(string.ascii_letters) for i in range(10)) + "@domain.pl"
    )


def get_random_username():
    return "".join(random.choice(string.ascii_letters) for i in range(10))


def get_random_password():
    return "".join(
        [random.choice(string.digits + string.ascii_letters) for i in range(10)]
    )

def get_random_logged_user(client: Client):
    email = get_random_email()
    username = get_random_username()
    password = get_random_password()
    re_password = password
    r = register_sample_user(client, email, username, password, re_password)
    r2 = login_sample_user(client, email, password)
    return r2

def get_user_me(client: Client):
    return client.get("/user/me", cookies=client.cookies)
