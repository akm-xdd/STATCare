from rest_framework import routers
from .views import *
routers = routers.DefaultRouter()
routers.register(r'patient-viewset',PatientViewSet,basename='patient')
routers.register(r'rfid',RFIDViewSet,basename='rfid')

urlpatterns = routers.urls