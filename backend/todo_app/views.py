
from django.shortcuts import render,redirect
from django.http import JsonResponse,HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from todo_app.models import Task,AppUser
from .serializers import TaskSerializer, UserSerializer
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth import authenticate, login, logout
from rest_framework.viewsets import ModelViewSet
from todo_app import serializers

class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = AppUser.objects.all()
class TaskViewSet(ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        AppUser.objects.create_user(username=body['email'],  email=body['email'], password=body['password'])
        print('it worked!')

    return JsonResponse({'success':True})

@api_view(['GET'])
def user_tasks(request,user_id):
    tasks = Task.objects.filter(user_id = user_id)
    serializer = TaskSerializer(tasks, many = True)


    return Response(serializer.data)