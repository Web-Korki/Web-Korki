from rest_framework import status
from rest_framework.test import APITestCase
from django.urls import reverse, resolve
from .models import Teacher
from .serializers import *


# Create your tests here.
class RegistrationTestCase(APITestCase):
    def test_registration(self):
        data = {
            "username": "testname",
            "email": "some@email.com",
            "password": "very_strong_password1234",
            "subjects": ["pol"],
        }
        resolver = resolve("/api/")
        # response = self.client.post(, data)
        self.assertEqual(resolver.view_name, "summary")

##TODO Write tests
