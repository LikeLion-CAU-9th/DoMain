from os import name
from . import views
from django.urls import path


urlpatterns = [
    path('', views.main, name="main"),
    path('test/', views.test, name="test"),
    path('start/', views.main, name="finance"),
]

