from django.shortcuts import render,get_object_or_404
from django.http import HttpResponse
# Create your views here.

def index(request):
    user = None
    if request.user.is_authenticated:
        user = {"name":request.user.username}
    return render(request,'main/index.html',user)
