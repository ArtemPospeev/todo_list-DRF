from rest_framework.serializers import ModelSerializer
from userapp.models import CustomUser


class CustomUserModelSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = 'username', 'first_name', 'last_name', 'email', 'birthday_date', 'id'
