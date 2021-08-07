from django.db.models.expressions import F
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
  if is_distinct_QS(qs):
    Layout.objects.create(creater = user, owner = user, from_store = False, data = qs[0].data, is_applied = False)
    # return redirect('layoutlist page')
    pass


def get_applied_layout(request):
  user = get_user_inst(request)
  qs = Layout.objects.filter(owner=user, is_applied=True)
  json = []
  if is_distinct_QS(qs):
    json = qs[0].data
  return HttpResponse(json)
  
  
def is_distinct_QS(QS):
  if len(QS) == 1:
    return True
  return False

def insert_dummy_layout(request):
  user = get_user_inst(request)
  Layout.objects.create(owner=user, creater=user, from_store=False, is_applied=True,data='[{"type": "finance","posX": "300px","posY": "500px","contents": {"items": ["삼성전자", "네이버", "카카오", "JYP Ent"]}},{"type": "d-day","posX": "300px","posY": "100px","content": {"items": ["헤커톤:2021-08-15", "개강:2021-09-01", "한살 더먹음:2022-01-01"]}},{"type": "searching","posX": "700px","posY": "500px","content": {"engine": "naver", "width": "500px", "height": "70px"}},{"type": "stickynote","posX": "700px","posY": "100px","contents": {"title": "다이어트 계획", "memo": "없음"}}]')
  return True