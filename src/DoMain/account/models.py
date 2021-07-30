from django.db import models


class User_info(models.Model):
  user_seq = models.IntegerField(primary_key=True)
  user_name = models.CharField(max_length = 30)
  user_email = models.EmailField(max_length=255, blank=False)
  user_pwd = models.TextField()
  register_date = models.DateField(auto_now_add=True)
  # is_active = 

  def __str__(self):
      return self.user_email
