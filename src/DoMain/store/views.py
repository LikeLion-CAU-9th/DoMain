from django.shortcuts import get_object_or_404, redirect, render
from store.models import StoreWidget, Comment
from account.models import User_info
from django.http import HttpResponse


def landing_page(request):
    return render(request, 'landingPage.html')

def store_main(request):
    return render(request, 'AssetStoreMainPage.html')

def subpage(request):
    email= request.session['user_email']
    user = User_info.objects.get(user_email=email)
    widgets = StoreWidget.objects.all()
    return render(request, 'subpage.html', {'widgets':widgets, 'user':user})

def detailpage(request, id):
    widget = get_object_or_404(StoreWidget, seq=id)
    return render(request, 'detailpage.html', {"widget":widget})

def mypage(request):
    return render(request, 'myPage.html')

def comment_write(request):
    if request.method == "POST":
        comment = Comment()
        comment.writer = request.user
        comment.content = request.POST.get('content')
# 좋아요
def like(request, widget_id):
    email= request.session['user_email']
    user = User_info.objects.get(user_email=email)
    print(email)
    widget = get_object_or_404(StoreWidget, seq=widget_id)
    if user in widget.like_users.all():
        widget.like_users.remove(user)
    else:
        widget.like_users.add(user)
    
    return redirect('subpage')
