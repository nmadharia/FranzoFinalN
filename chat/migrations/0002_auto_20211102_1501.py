# Generated by Django 3.2 on 2021-11-02 09:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chatmodel',
            name='from_id',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='chatmodel',
            name='to_id',
            field=models.IntegerField(),
        ),
    ]
