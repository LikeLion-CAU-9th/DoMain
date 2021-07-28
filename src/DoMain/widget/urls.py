from os import name
from . import views
from django.urls import path
from .views import Activate

urlpatterns = [
  path('finance/', views.finance, name="finance"),
]