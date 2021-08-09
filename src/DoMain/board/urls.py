from os import name
from django.urls import path
from board.views import *


urlpatterns = [
    path('custom/', custom, name="custom"),
    path('mainbar/', mainbar, name="mainbar"),
    path('test/', test, name="test"),
    path('test2/', test2, name="test2"),
]

