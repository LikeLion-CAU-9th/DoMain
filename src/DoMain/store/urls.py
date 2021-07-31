from django.urls import path, include
from store.views import *

urlpatterns = [
    path('', store_main, name='store_main'),
    path('subpage/', views.subpage, name="subpage"),
    path('detailpage/', views.detailpage, name="detailpage"),
]
