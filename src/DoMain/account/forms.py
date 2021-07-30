from django import forms
from .models import User_info

class UserForm(forms.ModelForm):
    class Meta:
        model = User_info
        fields = ['user_name', 'user_email', 'user_pwd']
        