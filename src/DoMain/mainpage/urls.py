from os import name
from mainpage.views import main
from django.urls import path


urlpatterns = [
    path('start/', main, name="finance"),
]

