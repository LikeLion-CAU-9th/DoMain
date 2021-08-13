from django.contrib import admin
from django.conf.urls import include
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from board.views import createData
from store.views import landing_page
from account.views import logout


urlpatterns = [
    path('', landing_page, name="landingPage"),
    path('account/', include('account.urls')),
    path('store/', include('store.urls')),
    path('widget/', include('widget.urls')),
    path('admin/', admin.site.urls),
    path('main/', include('board.urls')),
    path('createData/<str:table>/', createData, name="createData"),
    path('logout/', logout, name="logout")
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)