from django.db import models
from django.contrib.auth.models import User
from account.models import Profile

class Appointments(models.Model):
    doctorid = models.ForeignKey(User, related_name="user_appointments", on_delete=models.CASCADE)
    date = models.DateField(auto_now=False, blank=True)
    status=models.BooleanField(default=True)
    patient_name=models.CharField(max_length=30 ,blank=True)
    total_patients=models.CharField(max_length=30 ,blank=True)
    patient_phone=models.CharField(max_length=30 ,blank=True)
    pl=models.CharField(max_length=200 ,blank=True)
    time=models.CharField(max_length=30 ,blank=True)
    service=models.CharField(max_length=200 ,blank=True,null=True)
    age=models.CharField(max_length=30 ,blank=True)
    reason=models.CharField(max_length=400 ,blank=True)
    patient_email=models.CharField(max_length=400 ,blank=True)
    def __str__(self):
        return self.doctorid.username
class DoctorPL(models.Model):
    userid = models.ForeignKey(User,related_name='doctorpl', on_delete=models.CASCADE)
    pl =models.CharField(max_length=30)
    name =models.CharField(max_length=30)
    phone =models.CharField(max_length=30)
    email =models.CharField(max_length=30)
    city =models.CharField(max_length=30)
    consultation_fee =models.CharField(max_length=30, blank=True)
    postal_address =models.CharField(max_length=400)
    def __str__(self):
        return self.name
class PracticeLocation(models.Model):
    name =models.CharField(max_length=30)
    phone =models.CharField(max_length=30)
    email =models.CharField(max_length=30)
    city =models.CharField(max_length=30)
    consultation_fee =models.CharField(max_length=30, blank=True)
    postal_address =models.CharField(max_length=400, blank=True)
    def __str__(self):
        return self.name
class DoctorSchedule(models.Model):
    userid = models.ForeignKey(User,related_name='docschedule', on_delete=models.CASCADE)
    pl=models.ForeignKey(PracticeLocation,related_name='pl', on_delete=models.CASCADE)
    sun =models.BooleanField(default=False)
    mon=models.BooleanField(default=True)
    tue=models.BooleanField(default=True)
    wed=models.BooleanField(default=True)
    thu=models.BooleanField(default=True)
    fri=models.BooleanField(default=True)
    sat=models.BooleanField(default=False)
    start_time=models.CharField(max_length=30)
    finish_time=models.CharField(max_length=30)
    def __str__(self):
        return self.userid.username

class PLSettings(models.Model):
    userid = models.ForeignKey(User,related_name='pls_user', on_delete=models.CASCADE)
    pl=models.ForeignKey(PracticeLocation,related_name='pls_pl', on_delete=models.CASCADE)
    slot_duration=models.CharField(max_length=30,default='5')
    slot_capacity=models.CharField(max_length=30,default='2')
    min_time_before_appointment=models.CharField(max_length=30,default='15')
    online_booking=models.BooleanField(default=True)
    future_appointment_days=models.CharField(max_length=30,default='60')
    reminder_hours=models.CharField(max_length=30,blank=True)
    email_notification=models.BooleanField(default=True)
    booking_sms_external=models.BooleanField(default=True)
    booking_sms_internal=models.BooleanField(default=True)
    fee=models.CharField(max_length=30,default='1500')
    prepayment=models.BooleanField(default=False)
    prepayment_amount=models.CharField(max_length=30,blank=True)
    prepayment_full_partial=models.BooleanField(default=False)
    show_visit_payment=models.BooleanField(default=True)
    def __str__(self):
        return self.userid.username

class Analytics(models.Model):
    userid = models.ForeignKey(User,related_name='analytics_user', on_delete=models.CASCADE)
    name=models.CharField(max_length=30)
    date=models.DateTimeField(auto_now=True, blank=True)
    patients=models.CharField(max_length=30)
    received=models.DecimalField(max_digits=19, decimal_places=2)
    doctor_share=models.DecimalField(max_digits=19, decimal_places=2)
    hospital_share=models.DecimalField(max_digits=19, decimal_places=2)
    def __str__(self):
        return self.userid.username
class DocPatient(models.Model):
    doctorid= models.ForeignKey(User,related_name='doc_patient', on_delete=models.CASCADE)
    name=models.CharField(max_length=30)
    phone=models.CharField(max_length=30)
    appointment_date=models.DateTimeField(auto_now=True, blank=True)
    def __str__(self):
        return self.doctorid.username

class images(models.Model):
    user=models.ForeignKey(User,related_name='userimages',on_delete=models.CASCADE)
    photo = models.ImageField(upload_to="images")
    def __str__(self):
        return self.user.username
class docedu(models.Model):
    user=models.ForeignKey(User,related_name='edu',on_delete=models.CASCADE)
    degree_title=models.CharField(max_length=30)
    institue_name=models.CharField(max_length=400)
    location=models.CharField(max_length=400)
    def __str__(self):
        return self.user.username
class docspec(models.Model):
    user=models.ForeignKey(User,related_name='spec',on_delete=models.CASCADE)
    spec=models.CharField(max_length=200)
    def __str__(self):
        return self.user.username
class docservices(models.Model):
    user=models.ForeignKey(User,related_name='service',on_delete=models.CASCADE)
    service=models.CharField(max_length=200)
    price=models.CharField(max_length=200)
    def __str__(self):
        return self.user.username
class docexp(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    job_title=models.CharField(max_length=30)
    hospital_name=models.CharField(max_length=30)
    start_year=models.CharField(max_length=30)
    def __str__(self):
        return self.user.username
class docawards(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    title=models.CharField(max_length=30)
    description=models.TextField(max_length=30)
    award_year=models.CharField(max_length=30)
    def __str__(self):
        return self.user.username
class docpromembership(models.Model):
    user=models.ForeignKey(User,related_name='promembership',on_delete=models.CASCADE)
    membership=models.CharField(max_length=30)
    def __str__(self):
        return self.user.username
class docabout(models.Model):
    user=models.ForeignKey(User,related_name='about',on_delete=models.CASCADE)
    about=models.TextField(max_length=30)
    def __str__(self):
        return self.user.username

class patient_user(models.Model):
    email=models.CharField(max_length=30)
    otp=models.CharField(max_length=30)
    def __str__(self):
        return self.user.username



