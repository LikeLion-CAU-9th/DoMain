from django.contrib import admin
from django.conf.urls import include
from django.urls import path

urlpatterns = [
    path('store/', include('account.urls')),
    path('', include('store.urls')),
    path('admin/', admin.site.urls),
]
