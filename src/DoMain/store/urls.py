from django.urls import path
from store.views import landing_page

urlpatterns = [
  path('landing', landing_page, name="landingPage")
]