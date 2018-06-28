# -*- coding: utf-8 -*-
from rest_framework import permissions

class IsOnlyOwner(permissions.BasePermission):
    """
      Собственная премиссия если метод безопасный, то возвращаем тру, если нет, то проверяем, пользвователь перед нами или неть
      """

    def has_object_permission(self, request, view, obj):
        # Write permissions are only allowed to the owner of the app.
        return obj.user_id == request.user.id