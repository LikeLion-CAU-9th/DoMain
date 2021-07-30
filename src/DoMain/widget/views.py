from django.shortcuts import render

def finance_view(request):
  return render(request, 'finance.html')