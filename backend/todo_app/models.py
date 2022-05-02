from django.db import models
from django.contrib.auth.models import (AbstractUser)


class AppUser(AbstractUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']


class TaskList(models.Model):
    list_name = models.CharField(max_length=255)
    user_id = models.ForeignKey(AppUser,on_delete=models.CASCADE,default=None)




class Task(models.Model):
    title = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)
    list_id = models.ForeignKey(TaskList, on_delete=models.CASCADE,default=None)
    def __str__(self):
        return self.title

