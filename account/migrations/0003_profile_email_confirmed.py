# Generated by Django 2.2.6 on 2019-10-27 06:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_auto_20191026_0143'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='email_confirmed',
            field=models.BooleanField(default=False),
        ),
    ]
