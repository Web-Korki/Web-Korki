from rest_framework import status, permissions, viewsets
from rest_framework.decorators import action
from rest_framework.views import APIView, Response
from rest_framework.generics import (
    RetrieveUpdateDestroyAPIView,
    ListAPIView,
    CreateAPIView,
)
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


# class HouseView(RetrieveUpdateDestroyAPIView):
#     permission_classes = (permissions.IsAuthenticated,)
#
#     def get(self, request, *args):
#         house = House.objects.get(id=args)
#         serializer = HouseSerializer(house)
#         json = serializer.data
#         return Response(json, status=status.HTTP_200_OK)
#
#     def update(self, request, *args):
#         user = House.objects.get(id=args)
#         serializer = HouseSerializer(instance=user, data=request.data)
#         if serializer.is_valid():
#             user = serializer.save()
#             if user:
#                 json = serializer.data
#                 return Response(json, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     def delete(self, request, *args):
#         house = House.objects.get(id=args)
#         serializer = HouseSerializer(instance=house, data=request.data)
#         if serializer.is_valid():
#             house.delete()
#             return Response("User deleted", status=status.HTTP_200_OK)
#         else:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#
# class HouseList(ListAPIView):
#     permission_classes = (permissions.IsAuthenticated,)
#
#     def get(self, request, *args):
#         houses_list = House.objects.all()
#         serializer = HouseSerializer(houses_list, many=True)
#         json = serializer.data
#         return Response(json)
#
#
# class HouseCreate(CreateAPIView):
#     permission_classes = (permissions.AllowAny,)
#
#     def post(self, request, *args):
#         serializer = HouseSerializer(data=request.data)
#         if serializer.is_valid():
#             user = serializer.save()
#             if user:
#                 json = serializer.data
#                 return Response(json, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
