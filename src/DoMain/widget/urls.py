from os import name
from . import views
from django.urls import path

urlpatterns = [
  path('finance/', views.finance_view, name="finance"),
  path('getFinance/', views.get_finance, name="get-finance"),
  path('stickynote/', views.stickynote_view, name="stickynote"),
  path('dday/', views.dday_view, name="finance"),
  path('getDday/', views.get_dday, name="get-dday"),
  path('searching/', views.searching_view, name="searching"),
  path('todo/', views.todo_view,name="todo-list"),
  path('delete-layout/<str:pk>/', views.layout_delete), 
  path('delete-layout/<str:pk>/', views.layout_delete),
  path('get-applied-layout/', views.get_applied_layout),
  path('timer/', views.timer_view),
  path('layout-delete/<str:pk>/', views.layout_delete), 
  path('layout-clone/<str:pk>/', views.layout_clone),
  path('layout-add/', views.layout_add), 
  path('delete-layout/<str:pk>/', views.layout_delete),
  path('get-applied-layout/', views.get_applied_layout),

]