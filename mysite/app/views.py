from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from rest_framework import generics
from .permissions import IsOnlyOwner
from rest_framework import permissions
from .models import AppUser
from .serializers import AppSerializer


class AppDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated,IsOnlyOwner)
    queryset=AppUser.objects.all()
    serializer_class = AppSerializer

# Create your views here.
@login_required(redirect_field_name='accounts/login')
def index(request):
    user = None
    if request.user.is_authenticated:
        user = {"name": request.user.id}
        print('request.user.username')
    return render(request,'app/index.html',user)
