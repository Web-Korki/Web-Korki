from rest_framework.generics import ListAPIView
from rest_framework import permissions

from .serializers import HouseSerializer
from houses.models import House


class HouseListView(ListAPIView):
    queryset = House.objects.all()
    serializer_class = HouseSerializer
    permission_classes = (permissions.IsAuthenticated, )