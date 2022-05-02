from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = DefaultRouter()
router.register(r'task', views.TaskViewSet)
router.register(r'list',views.ListViewSet)

urlpatterns = [
    path('',include(router.urls)),
    path('user-list/<int:user_id>' ,views.user_list),
    path('get-task/<int:list_id',views.get_task),
    path('create-user',views.signup),
    path('token/', TokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
]




