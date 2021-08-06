from django.contrib import admin
from django.conf.urls import include
from django.urls import path

urlpatterns = [
    path('account/', include('account.urls')),
    path('store/', include('store.urls')),
    path('widget/', include('widget.urls')),
    path('admin/', admin.site.urls),
    path('', include('mainpage.urls')),
]
