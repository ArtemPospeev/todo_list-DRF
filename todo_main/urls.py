from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from userapp.views import CustomUserModelViewSet

router = DefaultRouter()
router.register('users', CustomUserModelViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/', include(router.urls))
]
