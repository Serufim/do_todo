from django.shortcuts import render
from django.contrib.auth.decorators import login_required
# Create your views here.
@login_required(redirect_field_name='accounts/login')
def index(request):
    return render(request,'app/index.html')
