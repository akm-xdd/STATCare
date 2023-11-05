from .views import Vitalviewset
from rest_framework import routers

routers = routers.DefaultRouter()
routers.register(r'vital',Vitalviewset,basename='vital')   
urlpatterns = routers.urls