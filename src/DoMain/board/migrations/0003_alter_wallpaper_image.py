# Generated by Django 3.2.5 on 2021-08-12 20:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('board', '0002_alter_wallpaper_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wallpaper',
            name='image',
            field=models.ImageField(blank=True, default='images/flower.jpg', null=True, upload_to='images/'),
        ),
    ]
