from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('', include('account.urls')),
    path('admin/', admin.site.urls),
]
