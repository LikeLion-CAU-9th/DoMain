from django.db import models
from django.db.models.fields import EmailField

class User_info(models.Model):
  user_seq = models.AutoField(primary_key=True)
  user_email = models.EmailField(max_length=255, verbose_name="user_email", blank = False)
  user_name = models.CharField(max_length=30, verbose_name="user_name")
  user_pwd = models.CharField(max_length = 512, verbose_name="user_pwd")
  register_date = models.DateTimeField(auto_now=True)
  is_active = models.BooleanField(default=False)

