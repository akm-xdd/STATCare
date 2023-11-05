from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(RFID)
admin.site.register(Department)
admin.site.register(Doctor)
admin.site.register(Patient)
admin.site.register(Staff)
admin.site.register(Report)