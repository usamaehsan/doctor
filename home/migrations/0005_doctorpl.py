# Generated by Django 2.2.6 on 2019-11-03 22:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('home', '0004_practicelocation'),
    ]

    operations = [
        migrations.CreateModel(
            name='DoctorPL',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pl', models.CharField(max_length=30)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='doctor_pl', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
