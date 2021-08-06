from os import name
from . import views
from django.urls import path

urlpatterns = [
  path('finance/', views.finance_view, name="finance"),
  path('getFinance/', views.get_finance, name="get-finance"),
  path('stickynote/', views.stickynote_view, name="stickynote"),
  
]