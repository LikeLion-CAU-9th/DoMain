from os import name
from . import views
from django.urls import path

urlpatterns = [
  path('finance/', views.finance_view, name="finance"),
  path('getFinance/', views.get_finance, name="get-finance"),
  path('dday/', views.dday_view, name="finance"),
  path('getDday/', views.get_dday, name="get-dday"),
]