from os import name
from . import views
from django.urls import path
from .views import Activate

urlpatterns = [
  path('login/', views.page_login, name="login"),
  path('activate/<str:uidb64>/<str:token>', Activate.as_view(), name="activate"),
]