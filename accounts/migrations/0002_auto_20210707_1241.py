# Generated by Django 3.2.5 on 2021-07-07 10:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='lessons_cancelled',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='lessons_taken',
            field=models.IntegerField(null=True),
        ),
    ]