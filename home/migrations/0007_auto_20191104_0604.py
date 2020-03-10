# Generated by Django 2.2.6 on 2019-11-04 01:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_doctorschedule'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctorpl',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='doctor_pl', to=settings.AUTH_USER_MODEL),
        ),
    ]
