from django.http.response import HttpResponse
from django.shortcuts import render
from .finance import crawl_finance

def finance_view(request):
  return render(request, 'finance.html')

def get_finance(request, stockItem):
  price = crawl_finance(stockItem)
  return HttpResponse(price)