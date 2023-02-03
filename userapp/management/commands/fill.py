import os
from random import randint, choice

from mixer.backend.django import mixer
from django.core.management.base import BaseCommand
from todoapp.models import Project, ToDo
from userapp.models import CustomUser

USER_COUNT = 10
PROJECT_COUNT = 7
TASK_COUNT = 40


class Command(BaseCommand):

    def handle(self, *args, **options):
        CustomUser.objects.all().delete()
        Project.objects.all().delete()
        ToDo.objects.all().delete()

        for _ in range(USER_COUNT):
            mixer.blend('userapp.CustomUser')

        user_objects = CustomUser.objects.all()

        for _ in range(PROJECT_COUNT):
            project = mixer.blend('todoapp.Project')
            users_counter = randint(1, 10)
            for user_name in range(users_counter):
                user_obj = choice(user_objects)
                project.users.add(user_obj.id)

        project_objects = Project.objects.all()

        for _ in range(TASK_COUNT):
            creator_obj = choice(user_objects)
            project_obj = choice(project_objects)
            mixer.blend('todoapp.ToDo', creator=creator_obj, project=project_obj)

        if os.getenv('ENV_TYPE') == 'local':
            CustomUser.objects.create_superuser('admin', password='admin', email='django@django.local')
