from rest_framework.serializers import ModelSerializer

from todoapp.models import Project, ToDo


class ProjectModelSerializer(ModelSerializer):

    class Meta:
        model = Project
        exclude = 'updated_at',


class ToDoModelSerializer(ModelSerializer):

    class Meta:
        model = ToDo
        exclude = 'updated_at',
