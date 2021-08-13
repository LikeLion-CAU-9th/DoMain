from django.db import models
from account.models import User_info

# Create your models here.
class WallPaper(models.Model):
    user = models.OneToOneField(User_info, on_delete=models.CASCADE)
    image = models.ImageField(upload_to = 'images/', default="images/flower.jpg", blank=True, null=True)

    def __str__(self):
        return self.user