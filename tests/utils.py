from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth import get_user_model
from django.test import Client
from django.urls import reverse
from djoser.utils import encode_uid
import random, string

Teacher = get_user_model()


def register_sample_user(client: Client, username: str, email: str):
    url = reverse("teacher-list")
    response = client.post(url, data={"username": username, "email": email},)
    return response


def activate_sample_user(client: Client, user):
    uid = encode_uid(user.id)
    token = default_token_generator.make_token(user)
    url = reverse("activation", kwargs={"uid": uid, "token": token})
    response = client.get(url)
    return response


def login_sample_user(client: Client, username: str, password: str):
    url = reverse("jwt-create")
    response = client.post(url, data={"username": username, "password": password},)
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


def get_random_logged_user(
    client: Client, generate_email=True, return_user_instance=False, admin=False
):
    email = ""
    if generate_email:
        email = get_random_email()
    username = get_random_username()
    r = register_sample_user(client, username, email)
    user = Teacher.objects.get(username=username)
    if admin:
        user.is_staff = True
        user.save()
    r2 = activate_sample_user(client, user)
    r3 = set_password(client, user)
    r4 = login_sample_user(client, username, "somestrongpassword123")
    if return_user_instance:
        return r4, user
    else:
        return r4


def get_user_me(client: Client):
    return client.get("/user/me", cookies=client.cookies)


def set_password(client: Client, user):
    uid = encode_uid(user.id)
    token = default_token_generator.make_token(user)
    url = reverse("teacher-reset-password-confirm")
    return client.post(
        url,
        data={
            "uid": uid,
            "token": token,
            "new_password": "somestrongpassword123",
            "re_new_password": "somestrongpassword123",
        },
    )


def get_token(client: Client, admin=False):
    user_header = get_random_logged_user(client, admin=admin)
    return user_header.json()["access"]


def get_token_without_email(client):
    """ returns token and user instance """
    user_header, user = get_random_logged_user(
        client, generate_email=False, return_user_instance=True
    )
    return user_header.json()["access"], user


def standard_get_list_test(client, url, token):
    """ Gets and returns list of objects """
    response = client.get(url, HTTP_AUTHORIZATION="Bearer {}".format(token),)
    assert response.status_code == 200 and len(response.json()) > 0
    return response.json()


def standard_retrieve_test(client, url, token, obj_id):
    """ Gets and returns item with specific id """
    response = client.get(url, HTTP_AUTHORIZATION="Bearer {}".format(token),)
    assert response.status_code == 200 and response.json()["id"] == obj_id


def standard_post_test(client, url, data, token, should_fail=False):
    """ Creates and returns id of created object """
    response = client.post(url, HTTP_AUTHORIZATION="Bearer {}".format(token), data=data)
    if should_fail:
        assert response.status_code == 403
        return
    assert response.status_code == 201 and response.json()["id"]
    return response.json()["id"]


def standard_put_test(client, url, data, token):
    """ Modifies object. Data should have different values than initial values """
    response = client.put(
        url,
        HTTP_AUTHORIZATION="Bearer {}".format(token),
        content_type="application/json",
        data=data,
    )
    assert response.status_code == 200

    for key in data.keys():
        if key == "datetime":
            assert (
                response.json()[key][:-9] == data[key]
            )  # Returned time is in other format
            continue

        assert response.json()[key] == data[key]


def standard_delete_test(client, url, token):
    """ Deletes object """
    response = client.delete(url, HTTP_AUTHORIZATION="Bearer {}".format(token),)
    assert response.status_code in [204, 200]


def model_view_set_test(client, url, data, data_changed, admin_required=False):
    """
    tests all methods of standard rest_framework.viewsets.ModelViewSet implementation
    """
    token = get_token(client, admin=admin_required)

    # POST
    obj_id = standard_post_test(client, url, data, token)  # Should create object

    # GET LIST
    standard_get_list_test(client, url, token)

    url_with_id = url + str(obj_id) + "/"

    # RETRIEVE
    standard_retrieve_test(client, url_with_id, token, obj_id)

    # MODIFY
    standard_put_test(client, url_with_id, data_changed, token)

    # DELETE
    standard_delete_test(client, url_with_id, token)

    # Assert user cannot post if admin is required
    if admin_required:
        token = get_token(client)
        standard_post_test(client, url, data, token, should_fail=True)
