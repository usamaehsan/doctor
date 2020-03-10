# Generated by Django 2.2.6 on 2019-11-06 03:18

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('home', '0020_auto_20191106_0708'),
    ]

    operations = [
        migrations.CreateModel(
            name='DocPatient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('phone', models.CharField(max_length=30)),
                ('appointment_date', models.DateTimeField(auto_now=True)),
                ('doctorid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='doc_patient', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]