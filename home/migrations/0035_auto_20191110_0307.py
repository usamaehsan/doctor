# Generated by Django 2.2.6 on 2019-11-09 22:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0034_auto_20191110_0227'),
    ]

    operations = [
        migrations.AlterField(
            model_name='docedu',
            name='institue_name',
            field=models.CharField(max_length=400),
        ),
        migrations.AlterField(
            model_name='docedu',
            name='location',
            field=models.CharField(max_length=400),
        ),
    ]
