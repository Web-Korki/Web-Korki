from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from routers import router
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
<<<<<<<<< Temporary merge branch 1

from backend.reporting import generate_report
from . import views

=========
from backend.views import ActivateUser
>>>>>>>>> Temporary merge branch 2

schema_view = get_schema_view(
   openapi.Info(
      title="WK-Backend API",
      default_version='v1',
      description="Docs for Bartek & Daniel <3",
      contact=openapi.Contact(email="tomasz.jastrzebski@gmail.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

app_name = 'backend'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include((router.urls, 'myapp'), namespace='api')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('activate/<uid>/<token>', ActivateUser.as_view({'get': 'activation'}), name='activation'),
    path(r'docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path(r'redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('report/', generate_report, name='report'),
    path('login/', views.login, name="login"), # TEMPORARY
              ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)