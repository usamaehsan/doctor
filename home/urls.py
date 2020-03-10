from django.urls import path
from . import views

urlpatterns=[
	path('',views.home,name='home'),
	path('for-doctors',views.for_doc,name='for_doc'),
	path('doctors-list/<str:city>/',views.doc_list,name='doc_list'),
	path('doctors-list/<str:city>/<str:spec>/',views.doc_list_spec,name='doc_list_spec'),
	path('doctor-detail/<int:userid>/',views.doc_detail,name='doc_detail'),
	path('dashboard',views.dashboard,name='dashboard'),
	path('update-contact-info', views.UpdateContactInfo, name='UpdateContactInfo'),
	path('practice-locations', views.PracticeL, name='PL'),
	path('add-practice-locations', views.AddPracticeL, name='AddPL'),
	path('deletepl/<int:cat>/', views.DeletePl, name='deletepl'),
	path('settings', views.PlSettings, name='PlSettings'),
	path('analytics', views.DocAnalytics, name='analytics'),
	path('docto-patients', views.DocPatients, name='DocPatients'),
	path('docto-appointments', views.DocAppointment, name='DocAppointment'),
	path('edit-profile', views.EditProfile, name='edit-profile'),
	path('docedu-d/<int:cat>/', views.deleteedu, name='deleteedu'),
	path('docspec-d/<int:cat>/', views.deletespec, name='deletespec'),
	path('docservice-d/<int:cat>/', views.deleteservice, name='deleteservice'),
	path('docexp-d/<int:cat>/', views.deleteexp, name='deleteexp'),
	path('docaward-d/<int:cat>/', views.deleteaward, name='deleteedu'),
	path('docpromembership-d/<int:cat>/', views.deletepromembership, name='deletepromembership'),
	path('docabout-d/<int:cat>/', views.deletedocabout, name='docabout'),
	path('book-appointment/<int:userid>/', views.book_ap, name='book_ap'),
	path('patientlogin/', views.patientlogin, name='patientlogin'),
]