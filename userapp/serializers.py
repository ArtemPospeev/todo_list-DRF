from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from userapp.models import CustomUser


class CustomUserModelSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'
