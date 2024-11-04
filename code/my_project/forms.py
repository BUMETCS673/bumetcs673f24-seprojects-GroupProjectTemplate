
from django import forms
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User
import re

class LoginForm(forms.Form):
    username = forms.CharField(max_length=150)
    password = forms.CharField(widget=forms.PasswordInput)

class RegistrationForm(forms.Form):
    account_name = forms.CharField(max_length=150, help_text="Enter any combination of letters, numbers, or symbols.")
    user_id = forms.CharField(max_length=10, min_length=10, help_text="Enter a unique 10-digit number.")
    password = forms.CharField(widget=forms.PasswordInput, help_text="Password must be at least 8 characters, with at least one uppercase letter, one lowercase letter, one digit, and one symbol.")

    def clean_user_id(self):
        user_id = self.cleaned_data['user_id']
        if not user_id.isdigit() or len(user_id) != 10:
            raise ValidationError("User ID must be a unique 10-digit number.")
        if User.objects.filter(profile__user_id=user_id).exists():
            raise ValidationError("User ID must be unique.")
        return user_id

    def clean_password(self):
        password = self.cleaned_data['password']
        if len(password) < 8 or not re.search(r"[A-Z]", password) or not re.search(r"[a-z]", password) or not re.search(r"\d", password) or not re.search(r"\W", password):
            raise ValidationError("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one symbol.")
        return password
