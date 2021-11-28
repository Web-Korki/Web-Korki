import os, django
from model_bakery import baker

os.environ["DJANGO_SETTINGS_MODULE"] = "myapp.settings"
django.setup()

import pytest
from django.urls import reverse
from tests.utils import (
    model_view_set_test,
    get_token_without_email,
    standard_get_list_test,
    standard_put_test,
    standard_delete_test,
    standard_retrieve_test,
)
from backend.models import Level, Subject, EmailFooter, Email
from datetime import date, timedelta

substitution_list_url = reverse("api:substitutions-list")
levels_list_url = reverse("api:levels-list")
subjects_list_url = reverse("api:subjects-list")
substitution_create_url = reverse("api:create_substitution-list")
assign_teacher_url = reverse("api:assign_teacher-list")


@pytest.mark.django_db
def test_levels(client):
    """ Standard rest_framework.viewsets.ModelViewSet test """
    data = {"name": "test"}
    data_modified = {"name": "test2"}
    model_view_set_test(client, levels_list_url, data, data_modified)


@pytest.mark.django_db
def test_subjects(client):
    """ Standard rest_framework.viewsets.ModelViewSet test """
    data = {"name": "test"}
    data_modified = {"name": "test2"}
    model_view_set_test(client, subjects_list_url, data, data_modified)


@pytest.mark.django_db
def test_substitution(client):
    """ All substitutions api calls methods """
    token, user = get_token_without_email(client)

    # Fill database before tests
    footer = baker.make(EmailFooter)
    email_mockup = baker.make(Email, name="SubstitutionEmail", footer=footer)
    email_mockup_confirm = baker.make(
        Email, name="SubstitutionConfirmEmail", footer=footer
    )
    level = baker.make(Level)
    subject = baker.make(Subject)
    d = date.today() + timedelta(5)

    # Create substitution
    correct_data = {
        "level": level.id,
        "subject": subject.id,
        "datetime": d.strftime("%Y-%m-%dT%H:%M:%S"),
    }
    response = client.post(
        substitution_create_url,
        HTTP_AUTHORIZATION="Bearer {}".format(token),
        data=correct_data,
    )
    assert response.status_code == 200 and not response.json()["new_teacher_found"]

    # Assign teacher
    new_sub_id = response.json()["id"]
    assign_teacher_url_with_id = assign_teacher_url + str(new_sub_id) + "/"
    response = client.patch(
        assign_teacher_url_with_id, HTTP_AUTHORIZATION="Bearer {}".format(token),
    )
    assert response.status_code == 200 and response.json()["new_teacher_found"]
    assert response.json()["new_teacher"] == user.id  # user correctly assigned

    # GET
    standard_get_list_test(client, substitution_list_url, token)
    substitution_list_url_with_id = substitution_list_url + str(new_sub_id) + "/"
    standard_retrieve_test(client, substitution_list_url_with_id, token, new_sub_id)

    # PUT
    standard_put_test(
        client, substitution_list_url_with_id, {"planned_topics": "test"}, token
    )

    # ERROR PREVENTION

    wrong_data_cases = [
        {**correct_data, "new_teacher_found": True},
        {**correct_data, "new_teacher": 1},
    ]

    # Create substitution with wrong data
    for wrong_data in wrong_data_cases:
        # Create substitution
        response = client.post(
            substitution_create_url,
            HTTP_AUTHORIZATION="Bearer {}".format(token),
            data=wrong_data,
        )
        assert response.status_code != 200

    # Assign teacher twice
    response = client.patch(
        assign_teacher_url_with_id, HTTP_AUTHORIZATION="Bearer {}".format(token),
    )
    assert response.status_code != 200

    # Delete
    standard_delete_test(client, substitution_list_url_with_id, token)
