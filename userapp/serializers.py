from rest_framework.serializers import ModelSerializer
from userapp.models import CustomUser


class CustomUserModelSerializerV01(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = 'username', 'first_name', 'last_name', 'email', 'birthday_date', 'id'


class CustomUserModelSerializerV02(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = 'username', 'first_name', 'last_name', 'email', 'birthday_date', 'id', 'is_superuser', 'is_staff'
