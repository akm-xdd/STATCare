# Generated by Django 4.2.7 on 2023-11-05 01:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("hospital", "0004_rfid_time_alter_patient_uid"),
    ]

    operations = [
        migrations.AddField(
            model_name="rfid",
            name="department",
            field=models.CharField(blank=True, default=None, max_length=100, null=True),
        ),
    ]