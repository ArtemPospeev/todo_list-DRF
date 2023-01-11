from django.db import models
from userapp.models import CustomUser, CustomBaseModel


class Project(CustomBaseModel):
    name = models.CharField(max_length=32, verbose_name='Project name')
    number = models.IntegerField(editable=False, unique=True, verbose_name='Project number')
    repo_link = models.CharField(max_length=128, verbose_name='Link on repo')
    users = models.ManyToManyField(CustomUser, verbose_name='Users')


class ToDo(CustomBaseModel):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, verbose_name='Project')
    creator = models.ForeignKey(CustomUser, on_delete=models.CASCADE, verbose_name='Creator')
    number = models.IntegerField(editable=False, unique=True, verbose_name='ToDo number')
    body = models.TextField(max_length=500, verbose_name='ToDo body')
    is_active = models.BooleanField(default=True, verbose_name='Is active')
