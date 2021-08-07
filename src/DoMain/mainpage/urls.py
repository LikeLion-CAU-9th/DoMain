from os import name
from mainpage.views import main
from django.urls import path
from . import views

urlpatterns = [
    path('', main, name="main"),
    path('start/', main, name="finance"),
    path('test/', views.test_view, name="test"),
]
