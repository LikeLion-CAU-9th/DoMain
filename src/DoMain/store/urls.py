from django.urls import path, include
from store.views import *

urlpatterns = [
    path('', store_main, name='store_main'),
    path('landing', landing_page, name="landingPage"),
    path('subpage/', subpage, name="subpage"),
    path('widget/<int:id>', detailpage, name="detailpage"),
    path('mypage/', mypage, name="mypage"),
       # 좋아요
    path('like/<int:widget_id>/', like, name="like"),
]
