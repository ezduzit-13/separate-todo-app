from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter




router = DefaultRouter()
router.register(r'task', views.TaskViewSet, basename='task')

urlpatterns = [
    path('',include(router.urls))
]


