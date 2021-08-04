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
    user = models.ForeignKey(User)
    download = models.IntegerField()
    widget_type = models.CharField(
        max_length=20, 
        choices=WidgetType,
        default=SIMPLE_WIDGET,
        help_text= '위젯 형식'
    )
    description = models.CharField(max_length=255, null=True, blank=True, help_text="위젯 설명")
    name = models.CharField(max_length=63, null=True, blank=True, help_text='위젯 제목')

    def __str__(self):
        return self.nname

    @property
    def host(self):
        return self.user.name

    @property
    def host_id(self):
        return self.user.id    


class WidgetGrade(models.Model)
    user = models.ForeignKey(User)
    widget = models.Foreignkey(Widget)





