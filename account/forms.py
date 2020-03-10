from django.contrib.auth.models import User
from .models import Profile
from django import forms
from django.forms import ModelForm,DateTimeInput
from django.utils.translation import ugettext_lazy as _
class LoginForm(forms.Form):
    username = forms.CharField(label='username/email')
class UserForm(forms.ModelForm):
    password=forms.CharField(widget=forms.PasswordInput())
    confirm_password=forms.CharField(widget=forms.PasswordInput())
    class Meta:
        model = User
        fields = ['username', 'password']
        widgets = {
            'username': DateTimeInput(attrs={'placeholder': 'Email'}),
        }
        labels = {
            'username': _('Email'),
        }
    def clean(self):
        cleaned_data = super(UserForm, self).clean()
        password = cleaned_data.get("password")
        confirm_password = cleaned_data.get("confirm_password")

        if password != confirm_password:
            raise forms.ValidationError(
                "password and confirm_password does not match"
            )
    

class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ('member', 'number', 'name')
        widgets = {
            'member': DateTimeInput(attrs={'type': 'text','placeholder': 'Mr./Ms./Dr./Prof.'}),
            'name': DateTimeInput(attrs={'placeholder': 'name'}),
            'number': DateTimeInput(attrs={'placeholder': 'eg. 03001234529'}),
        }