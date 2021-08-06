from django.urls import path, include
from store.views import *

urlpatterns = [
    path('', store_main, name='store_main'),
    path('landing', landing_page, name="landingPage"),
    path('subpage/', subpage, name="subpage"),
    path('detailpage/', detailpage, name="detailpage"),
]
