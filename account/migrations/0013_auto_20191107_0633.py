# Generated by Django 2.2.6 on 2019-11-07 01:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0012_auto_20191107_0539'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='fee',
            field=models.CharField(default='1000', max_length=30),
        ),
    ]
