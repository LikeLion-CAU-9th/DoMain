from os import name
from . import views
from django.urls import path
from .views import Activate

urlpatterns = [
  path('logout/',  views.logout, name="logout"),
  path('login/', views.login_view, name="login_view"),
  path('loginAction/', views.login_action, name="login_action"),
  path('join/', views.join_view, name="join_view"),
  path('joinAction/', views.join_action, name="join_action"),
  path('joinEmailOverap/', views.join_email_overap, name="join_email_overap"),
  path('activate/<str:uidb64>/<str:token>', Activate.as_view(), name="activate"),
  path('is-login/', views.is_login),
]