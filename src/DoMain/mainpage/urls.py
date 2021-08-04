from os import name
from . import views
from django.urls import path


urlpatterns = [
    path('start/', views.main, name="finance"),
    path('mainbar/', views.mainbar, name="custom"),
]

