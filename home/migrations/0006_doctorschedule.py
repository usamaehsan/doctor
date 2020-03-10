# Generated by Django 2.2.6 on 2019-11-04 00:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('home', '0005_doctorpl'),
    ]

    operations = [
        migrations.CreateModel(
            name='DoctorSchedule',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sun', models.BooleanField(default=False)),
                ('mon', models.BooleanField(default=True)),
                ('tue', models.BooleanField(default=True)),
                ('wed', models.BooleanField(default=True)),
                ('thu', models.BooleanField(default=True)),
                ('fri', models.BooleanField(default=True)),
                ('sat', models.BooleanField(default=False)),
                ('pl', models.CharField(max_length=30)),
                ('start_time', models.CharField(max_length=30)),
                ('finish_time', models.CharField(max_length=30)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='doctor_schedule', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]