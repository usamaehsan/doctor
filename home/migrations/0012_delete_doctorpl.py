# Generated by Django 2.2.6 on 2019-11-04 11:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0011_doctorpl_doctorschedule_practicelocation'),
    ]

    operations = [
        migrations.DeleteModel(
            name='DoctorPL',
        ),
    ]