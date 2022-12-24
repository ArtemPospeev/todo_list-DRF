from rest_framework.viewsets import ModelViewSet
from userapp.models import CustomUser
from userapp.serializers import CustomUserModelSerializer


class CustomUserModelViewSet(ModelViewSet):
    queryset = CustomUser.objects.filter(is_active=True,is_superuser=False)
    serializer_class = CustomUserModelSerializer
