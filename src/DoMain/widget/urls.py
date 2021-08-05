from os import name
from . import views
from django.urls import path

urlpatterns = [
  # Finance
  path('finance/', views.finance_view, name="finance"),
  path('getFinance/', views.get_finance, name="get-finance"),
  # Search bar
  path('searching/', views.searching_view, name="searching"),
]