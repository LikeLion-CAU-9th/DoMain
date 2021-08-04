from django.shortcuts import render

# Create your views here.
def main(request):
    return render(request, 'mainpage.html')

def mainbar(request):
    return render(request, 'mainbar.html')