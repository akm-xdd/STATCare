from rest_framework import serializers
from .models import *

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'
    
class RFIDSerializer(serializers.ModelSerializer):
    class Meta:
        model = RFID
        fields = '__all__'