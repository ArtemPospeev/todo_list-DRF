from rest_framework.serializers import ModelSerializer

from todoapp.models import Project, ToDo
from userapp.serializers import CustomUserModelSerializer


class ProjectModelSerializer(ModelSerializer):
    users = CustomUserModelSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(ModelSerializer):
    creator = CustomUserModelSerializer()
    project = ProjectModelSerializer()

    class Meta:
        model = ToDo
        fields = '__all__'
