from django.db import models
from django.contrib.auth.models import AbstractUser

NULLABLE = {'blank': True, 'null': True}


class CustomUser(AbstractUser):
    email = models.EmailField(unique=True, verbose_name='Email')
    birthday_date = models.DateField(**NULLABLE, verbose_name='Birthday date')