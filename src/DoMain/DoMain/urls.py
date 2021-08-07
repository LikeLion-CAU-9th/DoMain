from django.contrib import admin
from django.conf.urls import include
from django.urls import path

urlpatterns = [
    path('account/', include('account.urls')),
    path('store/', include('store.urls')),
    path('widget/', include('widget.urls')),
    path('admin/', admin.site.urls),
<<<<<<< HEAD
    path('main/', include('board.urls')),
=======
    path('', include('mainpage.urls')),
>>>>>>> 0c43e79d0ea3ef4afbeb66a16034740db5fd31f0
]
