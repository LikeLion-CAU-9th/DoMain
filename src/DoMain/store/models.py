from django.db import models
from django.db.models import Avg
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
    is_removed = models.BooleanField(default=False)

    def __str__(self):
        return self.nname

    @property
    def host(self):
        return self.user.name

    @property
    def host_id(self):
        return self.user.id

    @peroperty
    def score(self):
        score = WidgetStarredUser.objects.filter(is_removed=False).aggregate(Avg('score'))
        return score


class WidgetGrade(models.Model):
    user = models.ForeignKey(User)
    widget = models.Foreignkey(Widget)
    time_stamp = models.DateTimeField('time stamp')
    is_removied = models.BooleanField(default=False)

class WidgetLikedUser(Widgetgrade):


class WidgetStarredUser(WidgetGrade):
    score = models.FloatField()


