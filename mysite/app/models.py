from django.db import models
from django.contrib.auth.models import User
from djongo.models.fields import EmbeddedDictField
# Create your models here.

class AppUser(models.Model):
    id_user = models.OneToOneField(User,on_delete=models.CASCADE,primary_key=True)
    app = models.TextField()