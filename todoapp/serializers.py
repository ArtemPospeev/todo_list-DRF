from rest_framework.relations import StringRelatedField
from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer

from todoapp.models import Project, ToDo


class ProjectModelSerializer(HyperlinkedModelSerializer):
    users = StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(ModelSerializer):
    creator = StringRelatedField()
    project = StringRelatedField()

    class Meta:
        model = ToDo
        exclude = ('deleted',)
