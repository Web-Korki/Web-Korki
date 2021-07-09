from rest_framework import status, permissions, viewsets
from rest_framework.decorators import action
from .models import CustomUser
from .serializers import CustomUserListSerializer

class CustomUserViewSet(viewsets.ModelViewSet):

    serializer_class = CustomUserListSerializer

    def get_queryset(self):
        return CustomUser.objects.all()

    @action(detail=True, url_path=r'users/?P<user_id>.*/$', url_name='user-detail')
    def get_user(self, request, user_id=None):
        return CustomUser.objects.filter(id=user_id)

# class CustomUserCreate(APIView):
#     permission_classes = (permissions.AllowAny,)
#
#     def post(self, request):
#         serializer = CustomUserSerializer(data=request.data)
#         if serializer.is_valid():
#             user = serializer.save()
#             if user:
#                 json = serializer.data
#                 return Response(json, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
# class CustomUserUpdate(APIView):
#
#     def update(self, request, pk):
#         user = CustomUser.objects.get(id=pk)
#         serializer = CustomUserSerializer(instance=user, data=request.data)
#         if serializer.is_valid():
#             user = serializer.save()
#             if user:
#                 json = serializer.data
#                 return Response(json, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
# class CustomUserDelete(APIView):
#
#     def delete(self, request, pk):
#         user = CustomUser.objects.get(id=pk)
#         user.delete()
#         return Response("Deleted")

