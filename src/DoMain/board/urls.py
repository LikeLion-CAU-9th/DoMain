from DoMain.src.DoMain.mainpage.views import custom
from os import name
from board.views import main
from django.urls import path


urlpatterns = [
    path('custom/', custom, name="finance"),
]

