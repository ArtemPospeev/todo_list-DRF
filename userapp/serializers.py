from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from userapp.models import CustomUser


class CustomUserModelSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        exclude = ('password', 'groups', 'user_permissions', 'is_superuser', 'is_staff')
