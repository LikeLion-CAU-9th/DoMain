from django.shortcuts import render

# Create your views here.
def main(request):
    return render(request, 'mainpage.html')

def test_view(request):
    return render(request, 'test.html')
