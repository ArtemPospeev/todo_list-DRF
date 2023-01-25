import json
from django.conf import settings
from django.core.management.base import BaseCommand
from todoapp.models import Project, ToDo
from userapp.models import CustomUser


def load_from_json(file_name):
    with open(f'{settings.BASE_DIR}/json/{file_name}.json', 'r') as json_file:
        return json.load(json_file)


class Command(BaseCommand):

    def handle(self, *args, **options):
        users = load_from_json('users')
        projects = load_from_json('projects')
        todo_data = load_from_json('todo')

        CustomUser.objects.all().delete()
        Project.objects.all().delete()
        ToDo.objects.all().delete()

        for user in users:
            CustomUser.objects.create_user(**user)

        for project in projects:
            username_list = project.pop('users')
            project_obj = Project.objects.create(**project)
            for user_name in username_list:
                user_obj = CustomUser.objects.get(username=user_name)
                project_obj.users.add(user_obj)

        for todo in todo_data:
            creator_obj = CustomUser.objects.get(username=todo.pop('creator'))
            project_obj = Project.objects.get(number=todo.pop('project'))
            ToDo.objects.create(**todo, creator=creator_obj, project=project_obj)

        CustomUser.objects.create_superuser('admin', password='admin', email='django@django.local')
