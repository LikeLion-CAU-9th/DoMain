from django.db import models
from account.models import User_info


class AbstractBaseWidget(models.Model):
  seq = models.AutoField(primary_key=True)
  creater = models.ForeignKey(
      User_info, 
      on_delete=models.CASCADE, 
      db_column="creater"
  )
  create_date = models.DateField(auto_now_add=True, verbose_name="create_date")
  data = models.TextField(null=False, default="[]")
  from_store = models.BooleanField(null=False, default=False)
  
  @property
  def get_usrname(self):
    return self.first_creater.name


class Layout(AbstractBaseWidget):
  owner = models.ForeignKey(
      User_info, 
      on_delete=models.CASCADE,
      db_column="owner"
    )
  is_applied = models.BooleanField(null=False, default=False)
  name = models.CharField(max_length=31, null=False, blank=True)
  image = models.ImageField(upload_to='layouts/', null=True, blank=True)
