from rest_framework.generics import ListAPIView
from rest_framework import permissions

from .serializers import AccountSerializer
from accounts.models import Account


class AccountListView(ListAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    permission_classes = (permissions.IsAuthenticated, )



