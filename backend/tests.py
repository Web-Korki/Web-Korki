from rest_framework import status
from rest_framework.test import APITestCase
from django.urls import reverse
from .models import CustomUser
from .serializers import *


# Create your tests here.
class RegistrationTestCase(APITestCase):

    def test_registration(self):
        data = {'username': 'testname',
                'email': 'some@email.com',
                'password': 'very_strong_password1234',
                'subjects': ["pol"]}
        response = self.client.post('/api:users/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)