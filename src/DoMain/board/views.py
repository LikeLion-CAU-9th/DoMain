from django.shortcuts import render

def custom(request):
    return render(request, 'customPage.html')

    
def mainbar(request):
    return render(request, 'mainbar.html')

def home(request):
    return render(request, 'home.html')