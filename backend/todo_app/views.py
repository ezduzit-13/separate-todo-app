
from django.shortcuts import render,redirect
from django.http import JsonResponse,HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from todo_app.models import Task,AppUser
from .serializers import TaskSerializer
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth import authenticate, login, logout
from rest_framework.viewsets import ModelViewSet




class TaskViewSet(ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
