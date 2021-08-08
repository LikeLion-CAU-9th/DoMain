from django.db import models
from django.db.models import Avg
from account.models import User_info
from widget.models import AbstractBaseWidget
from django.utils import timezone


# class AbstractWidget(AbstractBaseWidget):
#     users_like = 


# class StoreWidget(AbstractWidget)
# users_like = models.ManyToManyField


# class StoreLayout(AbstractWidget)
# users_like = models.ManyToMany


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


class StoreWidget(AbstractBaseWidget):
    download = models.IntegerField(default=0)
    widget_type = models.CharField(
        max_length=20, 
        choices=WidgetType.WIDGET_TYPES,
        default=WidgetType.SIMPLE_WIDGET,
        help_text= '위젯 형식'
    )
    description = models.CharField(max_length=255, null=True, blank=True, help_text="위젯 설명")
    name = models.CharField(max_length=63, null=True, blank=True, help_text='위젯 제목')
    is_removed = models.BooleanField(default=False)
    like_users = models.ManyToManyField(User_info, related_name="like_widgets", blank=True)
    score = models.IntegerField(default=0)
    # image = models.ImageField()


    def __str__(self):
        return self.name

    @property
    def host(self):
        return self.user.user_name

    @property
    def host_id(self):
        return self.user.id

    # @property
    # def score(self):
    #     score = WidgetStarredUser.objects.filter(is_removed=False).aggregate(Avg('score'))
    #     return score

    @property
    def star_grade(self):
        star_grade = Comment.objects.all().aggregate(Avg(star_grade))
        return star_grade

    def score_earned(self, point):
        return self.score + point
        

# class WidgetGrade(models.Model):
#     user = models.ForeignKey(User)
#     widget = models.Foreignkey(Widget)
#     time_stamp = models.DateTimeField('time stamp')
#     is_removied = models.BooleanField(default=False)

# class WidgetLikedUser(Widgetgrade):
    

# class WidgetStarredUser(WidgetGrade):
#     score = models.FloatField()


class Comment(models.Model):
    writer = models.ForeignKey(User_info, on_delete=models.CASCADE)
    content = models.CharField(max_length=300)
    time = models.DateTimeField(default=timezone.now)
    widget = models.ForeignKey(StoreWidget, on_delete=models.CASCADE, related_name='comments')
    # 이걸 만들 필요가 있나???? -> reply_comment({{comment.id}})로 써야하나 해서
    id = models.AutoField(primary_key=True)

class Reply(models.Model):
    writer = models.ForeignKey(User_info, on_delete=models.CASCADE)
    content = models.CharField(max_length=300)
    time = models.DateTimeField(default=timezone.now)
    comment_id = models.ForeignKey(Comment, on_delete=models.CASCADE)