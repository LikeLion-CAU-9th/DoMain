from django.contrib import admin
from django.conf.urls import include
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('account/', include('account.urls')),
    path('store/', include('store.urls')),
    path('widget/', include('widget.urls')),
    path('admin/', admin.site.urls),
    path('', include('mainpage.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)