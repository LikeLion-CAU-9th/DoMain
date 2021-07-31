from django.shortcuts import render

# Create your views here.
def subpage(request):
    return render(request, 'subpage.html')

def detailpage(request):
    return render(request, 'detailpage.html')