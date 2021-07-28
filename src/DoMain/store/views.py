from django.shortcuts import render

# Create your views here.

def store_main(request):
    return render(request, 'MainPage.html')