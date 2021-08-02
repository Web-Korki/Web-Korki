from rest_framework import status, permissions, viewsets
from rest_framework.decorators import action
from .models import House
from .serializers import HouseSerializer

class HouseViewSet(viewsets.ModelViewSet):

    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = HouseSerializer

    def get_queryset(self):
        return House.objects.all()

    @action(detail=True, url_path=r'houses/?P<house_id>.*/$', url_name='house-detail')
    def get_user(self, request, house_id=None):
        return House.objects.filter(id=house_id)
# Create your views here.
