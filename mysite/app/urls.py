from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('api/<int:pk>', views.AppDetail.as_view()),
    path('', views.index),
]