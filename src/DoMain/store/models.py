from django.db import models
from account.models import User


class WidgetType:
    """
    WigetType
    - simpleWidget, LayoutWidget
    """
    SIMPLE_WIDGET = 'simple_widget'
    LAYOUT_WIDGET = 'layout_widget'

    WIDGET_TYPES = [
        (SIMPLE_WIDGET, '단일 위젯'),
        (LAYOUT_WIDGET, '레이아웃 위젯')
    ]


class Widget(models.Model):
    user = models.ForeignKey()
    download = models.IntegerField()
    widget_type = models.CharField(
        max_length=20, 
        choices=WidgetType,
        default=SIMPLE_WIDGET,
        help_text= '위젯 형식'
    )
    description = models.CharField(max_length=255, null=True, blank=True, help_text="위젯 설명")
    title = models.CharField(max_length=63, null=True, blank=True, help_text='위젯 제목')







