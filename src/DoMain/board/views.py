from django.shortcuts import render

def custom(request):
    return render(request, 'customPage.html')