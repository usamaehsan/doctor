from .models import patient_user
def patient_login(request):

	patient_login=request.session.get('patient_user')
	patient_user2=patient_user.objects.filter(id=patient_login)
	return {
		'is_patient_login':patient_login,'patient_user':patient_user2,
	}