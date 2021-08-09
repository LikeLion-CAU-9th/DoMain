from django.contrib import admin
from django.conf.urls import include
from django.urls import path
from board.views import createData

urlpatterns = [
    path('account/', include('account.urls')),
    path('store/', include('store.urls')),
    path('widget/', include('widget.urls')),
    path('admin/', admin.site.urls),
    path('main/', include('board.urls')),
    path('createData/<str:table>/', createData, name="createData"),
]
