from django.shortcuts import render


def store_main(request):
    return render(request, 'MainPage.html')

def subpage(request):
    return render(request, 'subpage.html')

def detailpage(request):
    return render(request, 'detailpage.html')
