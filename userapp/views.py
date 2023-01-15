from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, UpdateModelMixin
from userapp.models import CustomUser
from userapp.serializers import CustomUserModelSerializer


class CustomUserModelViewSet(GenericViewSet, ListModelMixin, RetrieveModelMixin, UpdateModelMixin):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserModelSerializer

    def get_queryset(self):
        return CustomUser.objects.filter(is_active=True, is_superuser=False)
