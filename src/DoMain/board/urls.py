from os import name
from django.urls import path
from board.views import *


urlpatterns = [
    path('custom/', custom, name="cusom"),
]

