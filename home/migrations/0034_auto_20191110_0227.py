# Generated by Django 2.2.6 on 2019-11-09 21:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0033_doctorpl_doctorschedule'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctorpl',
            name='postal_address',
            field=models.CharField(max_length=400),
        ),
        migrations.AlterField(
            model_name='practicelocation',
            name='postal_address',
            field=models.CharField(blank=True, max_length=400),
        ),
    ]
