# Generated by Django 2.2.6 on 2019-11-06 04:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0023_auto_20191106_0917'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appointments',
            old_name='user',
            new_name='doctorid',
        ),
    ]
