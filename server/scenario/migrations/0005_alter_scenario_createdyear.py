# Generated by Django 4.1.6 on 2023-02-02 02:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scenario', '0004_alter_scenario_createdyear'),
    ]

    operations = [
        migrations.AlterField(
            model_name='scenario',
            name='createdYear',
            field=models.DateTimeField(editable=False),
        ),
    ]
