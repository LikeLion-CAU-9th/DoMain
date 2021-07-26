from django.db import models

class User_info(models.Model):
  user_seq = models.AutoField(primary_key=True)
  user_email = models.EmailField(max_length=254, verbose_name="user_email", blank=False)
  user_password = models.CharField(max_length=512, verbose_name="user_passwd")
  register_dttm = models.DateField(auto_now_add=True, verbose_name="Register_date")
  is_active = models.BooleanField(default=False)
  
  def __str__(self):
      return self.user_email
