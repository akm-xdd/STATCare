from django.db import models
from hospital.models import Patient,Doctor

# Create your models here.
class Vitals(models.Model):
    patient = models.ForeignKey(Patient,on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    platelet = models.IntegerField()
    Hba = models.DecimalField(max_digits=5,decimal_places=2)
    potassium = models.DecimalField(max_digits=5,decimal_places=2)
    sodium = models.DecimalField(max_digits=5,decimal_places=2)
    dDimer = models.DecimalField(max_digits=5,decimal_places=2)
    sgot = models.DecimalField(max_digits=5,decimal_places=2)
    sgpt = models.DecimalField(max_digits=5,decimal_places=2)
    tlc = models.DecimalField(max_digits=5,decimal_places=2)
    ph = models.DecimalField(max_digits=5,decimal_places=2)


class Checkup(models.Model):
    patient = models.ForeignKey(Patient,on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor,on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    vital = models.ForeignKey(Vitals,on_delete=models.CASCADE)
    comment = models.TextField()


