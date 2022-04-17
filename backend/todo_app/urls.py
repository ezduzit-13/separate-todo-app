from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = DefaultRouter()
router.register(r'task', views.TaskViewSet)

urlpatterns = [
    path('',include(router.urls)),
    path('user-tasks/<int:user_id>' ,views.user_tasks),
    path('create-user',views.signup),
    path('token/', TokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
]







