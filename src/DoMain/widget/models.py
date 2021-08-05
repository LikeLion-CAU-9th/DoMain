# from django.db import models
# from account.models import User_info

# class Layout(models.Model):
#   layout_seq = models.AutoField(primary_key=True)
#   owner = models.ForeignKey(User_info, related_name="layout", on_delete=models.CASCADE, db_column="owner")
#   data = models.TextField(null=False, default="[]")
#   first_creater = models.ForeignKey(User_info, related_name="layout", on_delete=models.CASCADE, db_column="first_creater")
#   create_date = models.DateField(auto_now_add=True, verbose_name="create_date")
#   is_applied = models.BooleanField(null=False, default=False)
#   from_store = models.BooleanField(null=False, default=False)
