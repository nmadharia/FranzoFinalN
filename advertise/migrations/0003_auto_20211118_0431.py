# Generated by Django 3.2.9 on 2021-11-17 23:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('advertise', '0002_auto_20211118_0431'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='advertise',
            name='userId',
        ),
        migrations.AddField(
            model_name='advertise',
            name='id',
            field=models.AutoField(default=None, primary_key=True, serialize=False),
            preserve_default=False,
        ),
    ]