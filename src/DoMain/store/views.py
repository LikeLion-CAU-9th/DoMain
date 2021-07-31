from django.shortcuts import render


def landing_page(request):
    return render(request, 'landingPage.html')

 def store_main(request):
    return render(request, 'MainPage.html')

def subpage(request):
    return render(request, 'subpage.html')

def detailpage(request):
    return render(request, 'detailpage.html')
