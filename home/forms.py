from django.contrib.auth.models import User
from account.models import Profile
from .models import (PracticeLocation,images,docedu,docspec,docexp
	,docservices,docawards,docpromembership,docabout)
from django import forms
from django.forms import ModelForm,DateTimeInput,Textarea
from django.utils.translation import ugettext_lazy as _

class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ('member', 'name', 'number','PMDC')
        widgets = {
            'member': DateTimeInput(attrs={'class':'form-control','type': 'text','placeholder': 'Mr./Ms./Dr./Prof.'}),
            'name': DateTimeInput(attrs={'class':'form-control','placeholder': 'name'}),
            'number': DateTimeInput(attrs={'class':'form-control','placeholder': 'eg. 03001234529'}),
        }
        labels = {
            'member': _('Title'),
            'name': _('Name'),
            'number': _('Phone No'),
            'PMDC': _('PMDC #'),
            'name': _('Name'),
            'name': _('Name'),
        }
class ProfileForm2(forms.ModelForm):
    class Meta:
        model = User
        fields = ('username',)
        labels = {
            'username': _('Email'),
        }
        widgets = {
            'username': DateTimeInput(attrs={'class':'form-control','readonly': ''}),
        }
class AddPracticeLocation(forms.ModelForm):
    class Meta:
        model = PracticeLocation
        fields = ('name','phone','email','city','consultation_fee','postal_address')
        labels = {
            'name': _('Name'),
            'phone': _('Phone'),
            'email': _('Email'),
            'city': _('City'),
            'consultation_fee': _('Consultation Fee'),
            'name': _('Name'),
        }
        widgets = {
            'username': DateTimeInput(attrs={'class':'form-control','readonly': ''}),
        }

class ProfileImage(forms.ModelForm):
    class Meta:
        model = images
        fields = ('photo',) 
        labels={
        'photo': _('')
        }
class yearsofexp(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ('years_of_experience',) 
        labels={
        'years_of_experience': _('')
        }
        widgets = {
            'years_of_experience': DateTimeInput(attrs={'class':'form-control','type': 'number','placeholder':'Years of experience'}),
        }

class feeofdoc(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ('fee',) 
        labels={
        'fee': _('')
        }
        widgets = {
            'fee': DateTimeInput(attrs={'class':'form-control','type': 'number','placeholder':'fee'}),
        }
class docedu(forms.ModelForm):
    class Meta:
        model = docedu
        fields = ('degree_title','institue_name','location',) 
        labels={
        'degree_title': _(''),
        'institue_name': _(''),
        'location': _(''),
        }
        widgets = {
            'degree_title': DateTimeInput(attrs={'class':'form-control','placeholder':'Degree title'}),
            'institue_name': DateTimeInput(attrs={'class':'form-control','placeholder':'Institue name'}),
            'location': DateTimeInput(attrs={'class':'form-control','placeholder':'Location'}),
        }
class docspec(forms.ModelForm):
    class Meta:
        model = docspec
        fields = ('spec',) 
        labels={
        'spec': _('')
        }
        widgets = {
            'spec': DateTimeInput(attrs={'class':'form-control','placeholder':'Specialization'}),
        }
class docservices(forms.ModelForm):
    class Meta:
        model = docservices
        fields = ('service','price',) 
        labels={
        'service': _(''),
        'price': _('')
        }
        widgets = {
            'service': DateTimeInput(attrs={'class':'form-control','placeholder':'Services'}),
            'price': DateTimeInput(attrs={'class':'form-control','placeholder':'Price'}),
        }
class docexp(forms.ModelForm):
    class Meta:
        model = docexp
        fields = ('job_title','hospital_name','start_year',) 
        labels={
        'job_title': _(''),
        'hospital_name': _(''),
        'start_year': _('')
        }
        widgets = {
            'job_title': DateTimeInput(attrs={'class':'form-control','placeholder': 'Job Title'}),
            'hospital_name': DateTimeInput(attrs={'class':'form-control','placeholder': 'Hospital/Clinic name'}),
            'start_year': DateTimeInput(attrs={'class':'form-control','placeholder': 'Start Year'}),
        }
class docawards(forms.ModelForm):
    class Meta:
        model = docawards
        fields = ('title','description','award_year') 
        labels={
        'title': _(''),
        'description': _(''),
		'award_year': _('')
        }
        widgets = {
            'title': DateTimeInput(attrs={'class':'form-control','placeholder': 'Title'}),
            'description': DateTimeInput(attrs={'class':'form-control','placeholder': 'Description'}),
            'award_year': DateTimeInput(attrs={'class':'form-control','placeholder': 'Award Year'}),
        }
class docpromembership(forms.ModelForm):
    class Meta:
        model = docpromembership
        fields = ('membership',) 
        labels={
        'membership': _('')
        }
        widgets = {
            'membership': DateTimeInput(attrs={'class':'form-control','placeholder': 'Membership'}),
        }
class docabout(forms.ModelForm):
    class Meta:
        model = docabout
        fields = ('about',) 
        labels={
        'about': _('')
        }
        widgets = {
            'about': Textarea(attrs={'class':'form-control','placeholder': 'Tell something about you.'}),
        }
