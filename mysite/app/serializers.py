# -*- coding: utf-8 -*-
from rest_framework import serializers

from .models import AppUser

class AppSerializer(serializers.ModelSerializer):

    class Meta:
        model = AppUser
        fields = ('user', 'app')