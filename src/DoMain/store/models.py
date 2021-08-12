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
    SIMPLE_WIDGET_SEARCH_BAR = 'simple_widget_search_bar'
    SIMPLE_WIDGET_D_DAY = 'simple_widget_d_day'
    SIMPLE_WIDGET_NOTE = 'simple_widget_note'
    SIMPLE_WIDGET_FINANCE = 'simple_widget_finance'
    SIMPLE_WIDGET_BOOK_MARK = 'simple_widget_book_mark'
    SIMPLE_WIDGET_TIMER = 'simple_widget_timer'

    LAYOUT_WIDGET = 'layout_widget'

    WIDGET_TYPES = [
        (SIMPLE_WIDGET_SEARCH_BAR, '검색창'),
        (SIMPLE_WIDGET_D_DAY, '디데이'),
        (SIMPLE_WIDGET_NOTE, '메모장'),
        (SIMPLE_WIDGET_FINANCE, '주식'),
        (SIMPLE_WIDGET_BOOK_MARK, '북마크'),
        (SIMPLE_WIDGET_TIMER, '타이머'),
        (LAYOUT_WIDGET, '레이아웃 위젯'),
    ]


class StoreWidget(AbstractBaseWidget):
    download = models.IntegerField(default=0)
    widget_type = models.CharField(
        max_length=31, 
        choices=WidgetType.WIDGET_TYPES,
        default=WidgetType.LAYOUT_WIDGET,
        help_text= '위젯 형식'
    )
    description = models.CharField(max_length=255, null=True, blank=True, help_text="위젯 설명")
    name = models.CharField(max_length=63, null=True, blank=True, help_text='위젯 제목')
    is_removed = models.BooleanField(default=False)
    like_users = models.ManyToManyField(User_info, related_name="like_widgets", blank=True)
    score = models.IntegerField(default=0)
    image=models.ImageField(upload_to="storewidgets/", blank=True, null=True)
    # image = models.ImageField()


    def __str__(self):
        return self.name

    @property
    def like_count(self):
        return self.like_users.count()

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
   

class Reply(models.Model):
    writer = models.ForeignKey(User_info, on_delete=models.CASCADE)
    content = models.CharField(max_length=300)
    time = models.DateTimeField(default=timezone.now)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)
