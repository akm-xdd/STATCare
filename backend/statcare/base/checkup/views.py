from django.shortcuts import render
from rest_framework import viewsets,status
from .serializers import VitalsSerializer
from rest_framework.response import Response
from .models import Vitals
from django.shortcuts import get_object_or_404
# Create your views here.

class Vitalviewset(viewsets.ViewSet):
    def list(self,request):
        queryset = Vitals.objects.all().values()
        data = list(queryset)
        print(queryset)
        serializer = VitalsSerializer(data=data,many=True)
        if serializer.is_valid():
            return Response(serializer.data,status=status.HTTP_200_OK)
        else:
            print(serializer.errors)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        

    def create(self,request,*args,**kwargs):
        data = request.data
        print(data)
        serializer = VitalsSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self,request,pk=None):
        print("inside retrieve")
        print(pk)
        vitals_entries = Vitals.objects.filter(patient_id=pk).order_by('-date')
        print(vitals_entries)
        if vitals_entries.exists():
            most_recent_vitals = vitals_entries.first()
            serializer = VitalsSerializer(most_recent_vitals)
            return Response(serializer.data,status=status.HTTP_200_OK)
        else:
            print(serializer.errors)
            return Response(status=status.HTTP_404_NOT_FOUND)

    

