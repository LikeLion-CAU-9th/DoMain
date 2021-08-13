from os import name
from django.urls import path
from board.views import *
from django.conf import settings
from django.conf.urls.static import static
from board import views

urlpatterns = [
    path('home/', home, name="home"),
    path('mobile-warning/', views.mob_warning, name="mob-warning"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

