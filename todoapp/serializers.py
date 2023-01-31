from rest_framework.serializers import ModelSerializer

from todoapp.models import Project, ToDo


class ProjectModelSerializer(ModelSerializer):

    class Meta:
        model = Project
        exclude = 'created_at', 'updated_at'


class ToDoModelSerializer(ModelSerializer):

    class Meta:
        model = ToDo
        exclude = 'created_at', 'updated_at'
