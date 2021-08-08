from django.http import request, HttpResponse
from django.shortcuts import get_object_or_404, redirect, render
from store.models import StoreWidget
from store.models import Comment
from account.models import User_info
import json
from django.utils import timezone
from datetime import datetime


def landing_page(request):
    return render(request, 'landingPage.html')

def store_main(request):
    return render(request, 'AssetStoreMainPage.html')

def subpage(request):
    widgets = StoreWidget.objects.all()
    return render(request, 'subpage.html', {'widgets':widgets})

def detailpage(request, id):
    widget = get_object_or_404(StoreWidget, seq=id)
    # comment = get_object_or_404(Comment, id=id)
    comments = Comment.objects.filter(widget=widget)
    # replys = ReplyComment.objects.filter(comment=comment)
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

        kst = datetime.now(timezone('Asia/Seoul'))

        ret = {
            'body': comment.content,
            'time': kst.strftime(
        '%Y년 %m월 %d일 %H:%M %p'.encode('unicode-escape').decode()
    ).encode().decode('unicode-escape'),
            'user': comment.writer.user_name
        }
        return HttpResponse(json.dumps(ret), content_type="application/json")
        # return redirect('/store/widget/'+str(id))
# SSR CSR


# def reply_comment(request, id):
#     email = request.session['user_email']
#     user = User_info.objects.get(user_email=email)

#     if request.method == "POST":
#         reply = ReplyComment()
#         reply.writer = user
#         reply.content = request.POST.get('reply_content')
#         reply.parent_comment = get_object_or_404(Comment, id=id)
#         reply.save()
#         return redirect('/store/widget/'+)
    