# Generated by Django 4.1.6 on 2023-02-02 02:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scenario', '0003_alter_scenario_createdyear'),
    ]

    operations = [
        migrations.AlterField(
            model_name='scenario',
            name='createdYear',
            field=models.DateField(verbose_name=2023),
        ),
    ]
