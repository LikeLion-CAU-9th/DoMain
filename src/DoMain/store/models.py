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







