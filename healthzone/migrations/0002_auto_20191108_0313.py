# Generated by Django 2.2.6 on 2019-11-07 22:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('healthzone', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='photo',
            field=models.ImageField(blank=True, upload_to='blog'),
        ),
        migrations.AlterField(
            model_name='blog',
            name='text',
            field=models.TextField(blank=True),
        ),
    ]
