from django.urls import path
from . import views

urlpatterns = [
    path('subpage/', views.subpage,name="subpage"),
    path('detailpage/',views.detailpage, name="detailpage"),
]