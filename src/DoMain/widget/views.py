from django.http.response import HttpResponse
from django.shortcuts import redirect, render
from .finance import crawl_finance
from .models import Layout
from account.views import get_user_inst


def finance_view(request):
  return render(request, 'finance.html')


def get_finance(request):
  priceList = crawl_finance(request.GET)
  return_str = ""
  for item in priceList:
    return_str += (item + "/")
  return HttpResponse(return_str)

  
def stickynote_view(request):
  return render(request, 'stickynote.html')


def dday_view(request):
  return render(request, 'dday.html')


def get_dday(request):
  return HttpResponse()


def searching_view(request):
  return render(request, 'searching.html')


def layout_add(request):
  user = get_user_inst(request)
  Layout.objects.create(creater=user, owner=user, data="[]", from_store = False)
  return 


def layout_delete(request, pk):
  user = get_user_inst(request)
  qs = Layout.objects.filter(owner = user, seq = pk)
  if len(qs) == 1:
    Layout.objects.delete(owner = user, seq = pk)
    # return redirect('layoutlist page')
    pass


def layout_clone(request, pk):
  user = get_user_inst(request)
  qs = Layout.objects.filter(owner = user, seq = pk)
  if len(qs) == 1:
    Layout.objects.create(creater = user, owner = user, from_store = False, data = qs[0].data, is_applied = False)
    # return redirect('layoutlist page')
    pass
