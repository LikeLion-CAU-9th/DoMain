from django.shortcuts import get_object_or_404, render
from store.models import StoreWidget
from store.models import Comment


def landing_page(request):
    return render(request, 'landingPage.html')

def store_main(request):
    return render(request, 'AssetStoreMainPage.html')

def subpage(request):
    widgets = StoreWidget.objects.all()
    return render(request, 'subpage.html', {'widgets':widgets})

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
