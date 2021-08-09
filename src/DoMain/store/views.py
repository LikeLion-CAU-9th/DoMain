from django.http import request, HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404, redirect, render
from store.models import StoreWidget
from store.models import Comment, Reply
from account.models import User_info
from widget.models import Layout
import json
from django.utils import timezone
from datetime import datetime
from store.models import WidgetType


def landing_page(request):
    return render(request, 'landingPage.html')

def store_main(request):
    return render(request, 'AssetStoreMainPage.html')

def subpage(request):
    email= request.session['user_email']
    user = User_info.objects.get(user_email=email)
    widgets = StoreWidget.objects.all()
    layouts = StoreWidget.objects.filter(widget_type=WidgetType.LAYOUT_WIDGET)
    searchbars = StoreWidget.objects.filter(widget_type=WidgetType.SIMPLE_WIDGET_SEARCH_BAR)
    # image=StoreWidget.objects.get('image')

    return render(request, 'subpage.html', {'widgets':widgets, 'user':user, 'layouts':layouts, 'searchbars':searchbars})

def detailpage(request, id):
    widget = get_object_or_404(StoreWidget, seq=id)
    comments = Comment.objects.filter(widget=widget)
    return render(request, 'detailpage.html', {"widget":widget, "comments":comments})

def mypage(request):
    return render(request, 'myPage.html')

def comment_write(request):
    email= request.session['user_email']
    user = User_info.objects.get(user_email=email)

    if request.method == "POST":
        comment = Comment()
        comment.writer = user
        comment.widget = get_object_or_404(StoreWidget, seq=request.POST.get('widget_id'))
        comment.content = request.POST.get('body')
        comment.save()

        store_widget = StoreWidget.objects.get(seq=request.POST.get('widget_id'))

        comments = Comment.objects.filter(widget=store_widget)
        comments_length=len(comments)
        dt_now = datetime.now()
        ampm = dt_now.strftime('%p')
        ampm_kr = '오전' if ampm == 'AM' else '오후'
    
        ret = {
            'body': comment.content,
            'time': dt_now.strftime(f"%Y년 %#m월 %#d일 %#I:%M {ampm_kr}"
            .encode('unicode-escape').decode())
            .encode().decode('unicode-escape'),
            'user': comment.writer.user_name,
            'id': comment.id,
            "comments_length":comments_length
        }
        return HttpResponse(json.dumps(ret), content_type="application/json")
        

def reply_comment(request):
    email= request.session['user_email']
    user = User_info.objects.get(user_email=email)

    if request.method == "GET":
        comment_id = request.GET.get('comment_id')
        comment = Comment.objects.get(id=comment_id)
        reply_comments = Reply.objects.filter(comment=comment)
        json_replys = list(reply_comments.values())
        ret = {
            "reply_comments": list(reply_comments.values())
        }
        # return HttpResponse(json.dumps(ret), content_type="application/json")
        return JsonResponse(json_replys, safe=False)

      
def like(request):
    email= request.session['user_email']
    user = User_info.objects.get(user_email=email)
    widget=get_object_or_404(StoreWidget, seq=request.POST['widget_id'])
    
    if user in widget.like_users.all():
        widget.like_users.remove(user)
        message="♡"

    else:
        widget.like_users.add(user)
        message="♥"
   
    ret={
        'message':message,
        'num':int(widget.like_users.count()),
    }
    return HttpResponse(json.dumps(ret), content_type="application/json")      

def make_download(request):
    email= request.session['user_email']
    user = User_info.objects.get(user_email=email)
    widget=get_object_or_404(StoreWidget, seq=request.POST['widget_id'])

    Layout.objects.create(
        creater=user,
        data = widget.data,
        from_store=True,
        owner = widget.creater
        )
    ret = {
        "download_message": "다운로드가 완료되었습니다."
    }
    return HttpResponse(json.dumps(ret), content_type="application/json")      


def make_reply(request):
    email= request.session['user_email']
    user = User_info.objects.get(user_email=email)
    comment = get_object_or_404(Comment, id=request.POST.get('comment_id'))

    if request.method == "POST":
        reply = Reply()
        reply.writer = user
        reply.comment = comment
        reply.content = request.POST.get('reply')
        reply.save()

        ret = {
            'message':'잘됨'
        }
        return HttpResponse(json.dumps(ret), content_type="application/json")
    