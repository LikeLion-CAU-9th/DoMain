from django.urls import path, include
from store.views import *

urlpatterns = [
  path('store/', store_main, name='store_main'),
]