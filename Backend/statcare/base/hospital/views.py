from django.shortcuts import render
from rest_framework import viewsets,status
from .serializers import PatientSerializer,RFIDSerializer
from rest_framework.response import Response
from .models import *
import datetime 
from django.shortcuts import get_object_or_404
# Create your views here.

class PatientViewSet(viewsets.ViewSet):
    def list(self,request):
        data = Patient.objects.all()
        serializer = PatientSerializer(data,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    def create(self,request,*args,**kwargs):
        data = request.data
        print(data['name'])
        print(data['uid'])
        print(data)
        serializer = PatientSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    def retrieve(self,request,pk=None):
        try:
            data = Patient.objects.get(uid=pk)
            serializer = PatientSerializer(data)
        except Patient.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    def update(self,request,pk=None):
        try:
            data = Patient.objects.get(uid=pk)
            serializer = PatientSerializer(data,data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        except Patient.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
class RFIDViewSet(viewsets.ViewSet):
    def list(self,request):
       pass
    
    def create(self,request,*args,**kwargs):
        print(request.data)
        raw = request.data
        data = request.data['data'].split(',')
        print('patient',data[2])
        time = data[2]
        time = datetime.datetime.fromtimestamp(int(time)//1000)
        rfid = RFID.objects.get_or_create(rfid=raw['epc'])[0]
        rfid.is_active = True
        rfid.pid = Patient.objects.get(uid=data[2])
        rfid.time = time
        rfid.department = data[1]
        print(rfid)
        rfid.save()
        

        
        uid = data[0]
        print("epc",raw['epc']) 
        print("time",time)
        print("department",data[1])
        
        return Response(request.data,status=status.HTTP_201_CREATED)
        # serializer  = RFIDSerializer(data=request.data)
        
        # if serializer.is_valid():
        #     serializer.save()
        #     return Response(serializer.data,status=status.HTTP_201_CREATED)

    def retrieve(self,request,pk=None):
        try:
            data = RFID.objects.get(id=pk)
            serializer = RFIDSerializer(data)
        except RFID.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    def update(self,request,pk=None):
        try:
            data = RFID.objects.get(id=pk)
            serializer = RFIDSerializer(data,data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        except RFID.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)