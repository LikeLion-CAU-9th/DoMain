from os import name
from django.urls import path
from board.views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('custom/', custom, name="custom"),
    path('mainbar/', mainbar, name="mainbar"),
    path('home/', home, name="home"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

