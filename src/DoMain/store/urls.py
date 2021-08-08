from django.urls import path, include
from store.views import *

urlpatterns = [
    path('', store_main, name='store_main'),
    path('landing', landing_page, name="landingPage"),
    path('subpage/', subpage, name="subpage"),
    path('widget/<int:id>', detailpage, name="detailpage"),
    path('mypage/', mypage, name="mypage"),
    path('widget/comment/write/', comment_write, name="comment_write"),
]
