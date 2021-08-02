from django.http.response import HttpResponse
from django.shortcuts import render
from .finance import crawl_finance

def finance_view(request):
  return render(request, 'finance.html')

def get_finance(request):
  priceList = crawl_finance(request.GET)
  return_str = ""
  for item in priceList:
    return_str += (item + "/")
  return HttpResponse(return_str)


def dday_view(request):
  return render(request, 'dday.html')

def get_dday(request):
  
  return HttpResponse()
