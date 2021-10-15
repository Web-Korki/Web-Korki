from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth import get_user_model
from django.test import Client
from django.urls import reverse
from djoser.utils import encode_uid
import random, string

Teacher = get_user_model()

# Utils
def register_sample_user(
    client: Client, username: str, email: str
):
    url = reverse("teacher-list")
    response = client.post(
        url,
        data={
            "username": username,
            "email": email
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
    r = register_sample_user(client, username, email)
    user = Teacher.objects.get(username=username)
    r2 = activate_sample_user(client, user)
    r3 = set_password(client, user)
    r4 = login_sample_user(client, username, "somestrongpassword123")
    return r4

def get_user_me(client: Client):
    return client.get("/user/me", cookies=client.cookies)

def set_password(client: Client, user):
    uid = encode_uid(user.id)
    token = default_token_generator.make_token(user)
    url = reverse('teacher-reset-password-confirm')
    return client.post(url, data={'uid': uid, 'token': token, 'new_password': 'somestrongpassword123', 're_new_password': 'somestrongpassword123'})