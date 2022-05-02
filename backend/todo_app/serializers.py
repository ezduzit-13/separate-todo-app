from rest_framework import serializers
from .models import Task,AppUser,TaskList

class TaskListSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskList
        fields = '__all__'



class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppUser
        fields = '__all__'



