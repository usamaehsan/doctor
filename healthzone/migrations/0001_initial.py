# Generated by Django 2.2.6 on 2019-11-07 21:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(blank=True)),
                ('category', models.CharField(blank=True, max_length=30)),
                ('title', models.CharField(blank=True, max_length=30)),
                ('text', models.TextField(blank=True, max_length=30)),
            ],
        ),
    ]
