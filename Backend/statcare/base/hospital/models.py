from django.db import models
import uuid
import datetime

# Create your models here.
class Doctor(models.Model):
    uid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)

class Patient(models.Model):
    uid = models.CharField(primary_key=True,max_length=100)
    name = models.CharField(max_length=100)
    doa = models.DateTimeField(auto_now_add=True)
    dos = models.DateTimeField(default=None,null=True,blank=True)
    phonenumber = models.CharField(max_length=100,null=True,blank=True,default=None)
    gender = models.CharField(max_length=100,null=True,blank=True,default=None) 
    doctor = models.CharField(max_length=100,null=True,blank=True,default=None)
    ward = models.CharField(max_length=100,null=True,blank=True,default=None)
    sr = models.CharField(max_length=100,null=True,blank=True,default=None)
    diagnosis_detail = models.TextField(default=None,null=True,blank=True)
    dob = models.DateTimeField(default=None,null=True,blank=True)
    age = models.IntegerField(default=0)


class RFID(models.Model):
    rfid = models.CharField(max_length=100,primary_key=True)
    is_active = models.BooleanField(default=True)
    pid = models.ForeignKey(Patient,on_delete=models.CASCADE,null=True,blank=True)
    time = models.DateTimeField(default=datetime.datetime.now,null=True,blank=True)    
    department = models.CharField(max_length=100,null=True,blank=True,default=None)

class Department(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    staffs = models.IntegerField(default=0)
    patients = models.IntegerField(default=0)


class Staff(models.Model):
    uid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)


class Report(models.Model):
    uid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    report = models.FileField(upload_to='media/reports')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    uploaded_by = models.ForeignKey(Staff, on_delete=models.CASCADE)


