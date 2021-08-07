from rest_framework import status, permissions
from rest_framework.views import APIView, Response, ViewSet
from rest_framework.generics import (
    RetrieveUpdateDestroyAPIView,
    ListAPIView,
    CreateAPIView,
)
from .models import CustomUser
from .serializers import CustomUserSerializer, CustomUserListSerializer


# class CustomUserView(RetrieveUpdateDestroyAPIView):
#     permission_classes = (permissions.IsAuthenticated,)
#
#     def get(self, request, *args):
#         user = CustomUser.objects.get(id=args)
#         serializer = CustomUserSerializer(user)
#         json = serializer.data
#         return Response(json, status=status.HTTP_200_OK)
#
#     def update(self, request, *args):
#         user = CustomUser.objects.get(id=args)
#         serializer = CustomUserSerializer(instance=user, data=request.data)
#         if serializer.is_valid():
#             user = serializer.save()
#             if user:
#                 json = serializer.data
#                 return Response(json, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     def delete(self, request, *args):
#         user = CustomUser.objects.get(id=args)
#         serializer = CustomUserSerializer(instance=user, data=request.data)
#         if serializer.is_valid():
#             user.delete()
#             return Response("User deleted", status=status.HTTP_200_OK)
#         else:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#
# class CustomUserList(ListAPIView):
#     permission_classes = (permissions.IsAuthenticated,)
#
#     def get(self, request, *args):
#         users_list = CustomUser.objects.all()
#         serializer = CustomUserListSerializer(users_list, many=True)
#         json = serializer.data
#         return Response(json)
#
#
# class CustomUserCreate(CreateAPIView):
#     permission_classes = (permissions.AllowAny,)
#
#     def post(self, request, *args):
#         serializer = CustomUserSerializer(data=request.data)
#         if serializer.is_valid():
#             user = serializer.save()
#             if user:
#                 json = serializer.data
#                 return Response(json, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
