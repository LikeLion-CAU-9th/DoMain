# Generated by Django 3.2.5 on 2021-08-06 08:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('account', '0001_initial'),
        ('widget', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='StoreWidget',
            fields=[
                ('abstractbasewidget_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='widget.abstractbasewidget')),
                ('download', models.IntegerField()),
                ('widget_type', models.CharField(choices=[('simple_widget', '단일 위젯'), ('layout_widget', '레이아웃 위젯')], default='simple_widget', help_text='위젯 형식', max_length=20)),
                ('description', models.CharField(blank=True, help_text='위젯 설명', max_length=255, null=True)),
                ('name', models.CharField(blank=True, help_text='위젯 제목', max_length=63, null=True)),
                ('is_removed', models.BooleanField(default=False)),
                ('like_users', models.ManyToManyField(blank=True, related_name='like_widgets', to='account.User_info')),
            ],
            bases=('widget.abstractbasewidget',),
        ),
    ]
