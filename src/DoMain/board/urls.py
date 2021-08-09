from os import name
from django.urls import path
from board.views import *


urlpatterns = [
    path('custom/', custom, name="custom"),
    path('mainbar/', mainbar, name="mainbar"),
    path('test/', test, name="test"),
]

