from django.shortcuts import render
from widget.views import insert_dummy_layout, view_list

def main(request):
    return render(request, 'mainpage.html')

def test(request):
    layout_list = view_list(request)
    data = {'layout_list': layout_list}
    return render(request, 'test.html', data)