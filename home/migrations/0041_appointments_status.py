# Generated by Django 2.2.6 on 2019-11-11 06:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0040_auto_20191111_0237'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointments',
            name='status',
            field=models.BooleanField(default=True),
        ),
    ]
