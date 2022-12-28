from django.db import models
from django.contrib.auth.models import AbstractUser
from uuid import uuid4

NULLABLE = {'blank': True, 'null': True}


class CustomUser(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    email = models.EmailField(unique=True, verbose_name='Email')
    birthday_date = models.DateField(**NULLABLE, verbose_name='Birthday date')