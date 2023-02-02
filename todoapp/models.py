from django.db import models
from userapp.models import CustomUser, CustomBaseModel


class Project(CustomBaseModel):
    number = models.IntegerField(unique=True, verbose_name='Task number')
    name = models.CharField(max_length=32, verbose_name='Project name')
    repo_link = models.CharField(max_length=128, verbose_name='Link on repo')
    users = models.ManyToManyField(CustomUser, verbose_name='Users')

    def __str__(self):
        return f' Name: {self.name} '


class ToDo(CustomBaseModel):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, verbose_name='Project')
    number = models.IntegerField(unique=True, verbose_name='Task number')
    name = models.CharField(max_length=128, verbose_name='Task name')
    creator = models.ForeignKey(CustomUser, on_delete=models.CASCADE, verbose_name='Creator')
    body = models.TextField(max_length=500, verbose_name='ToDo body')
    is_active = models.BooleanField(default=True, verbose_name='Is active')

    def __str__(self):
        return f'Project: {self.project} | Task # {self.creator}'
