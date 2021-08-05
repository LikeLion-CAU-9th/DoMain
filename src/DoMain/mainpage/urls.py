from os import name
from mainpage.views import main
from django.urls import path
from . import views


urlpatterns = [
    path('start/', main, name="finance"),
]
