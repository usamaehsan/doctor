# Generated by Django 2.2.6 on 2019-11-06 20:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0025_images'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='images',
            name='attachment',
        ),
    ]
