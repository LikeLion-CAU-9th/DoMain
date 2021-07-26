from os import name
from . import views
from django.urls import path
from .views import Activate

urlpatterns = [
  path('login/', views.login_view, name="login_view"),
  path('loginAction/', views.login_action, name="login_action"),
  path('join/', views.join_view, name="join_view"),
  path('joinAction/', views.join_action, name="join_action"),
  path('activate/<str:uidb64>/<str:token>', Activate.as_view(), name="activate"),
]