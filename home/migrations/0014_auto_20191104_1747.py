# Generated by Django 2.2.6 on 2019-11-04 12:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0013_doctorpl'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctorpl',
            name='postal_address',
            field=models.CharField(max_length=30),
        ),
    ]
