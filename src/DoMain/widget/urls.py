from os import name
from . import views
from django.urls import path

urlpatterns = [
  path('finance/', views.finance_view, name="finance"),
]