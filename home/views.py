from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from account.models import Profile
from django.contrib.auth.models import User
from .models import (Appointments,
PracticeLocation,DoctorPL,DoctorSchedule,PLSettings,Analytics,DocPatient,images,
patient_user) 
#models are renamed here because form and model both have save names and django give 
#error with same name 
#model name is just renamed by at the end of name m(m stands for model)
from .models import (docedu as docedum,docspec as docspecm,docexp as docexpm
,docservices as docservicesm,docawards as docawardsm,
docpromembership as docpromembershipm,docabout as docaboutm)
from django.views.generic.edit import CreateView
from django.contrib import messages
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.forms import PasswordChangeForm
from django.shortcuts import get_object_or_404
from .forms import (ProfileForm,ProfileForm2,AddPracticeLocation,
    ProfileImage,yearsofexp,feeofdoc,docedu,docspec,docexp
    ,docservices,docawards,docpromembership,docabout)
from django.template.loader import render_to_string
from django.http import JsonResponse
from django.db.models import Q
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404
from django.db.models import Sum
from django.views.generic import ListView
from django.db import connection
import datetime
from django.core.mail import EmailMessage
import random
import smtplib, ssl
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
# Create your views here.
def home(request):
    args={}
    return render(request,'home/home.html',args)
def for_doc(request):
    return render(request,'home/for-doctors.html',{})
def doc_list(request, city):
    date=datetime.datetime.now().strftime ("%Y-%m-%d")
    if request.method == 'POST':
        if request.POST['searchhome']:
            if request.POST['spec']:
                city=request.POST.get('city')
                doc_hosp=request.POST.get('doc_hosp')
                spec=request.POST.get('spec')
                gender=request.POST.get('gender')
                if spec == "all" and gender == "all" and doc_hosp== "all":
                    docpl=User.objects.filter(
                        Q(doctorpl__city__icontains=city)).distinct()
                elif spec == "all" and gender == "all":
                    docpl=User.objects.filter(
                        Q(doctorpl__city__icontains=city) 
                        & (Q(user_profile__name__icontains=doc_hosp) 
                            | Q(doctorpl__name__icontains=doc_hosp) ) ).order_by('id','-id').distinct()
                elif spec == "all":
                    docpl=User.objects.filter(
                        Q(doctorpl__city__icontains=city) 
                        & (Q(user_profile__name__icontains=doc_hosp) 
                            | Q(doctorpl__name__icontains=doc_hosp) )
                        &Q(user_profile__gender=gender)   ).distinct()
                else:
                    docpl=User.objects.filter(
                        Q(doctorpl__city__icontains=city) 
                        & (Q(user_profile__name__icontains=doc_hosp) 
                            | Q(doctorpl__name__icontains=doc_hosp) ) 
                        & Q(spec__spec__icontains=spec)).distinct()
                if docpl.count() > 0:
                    args={'docpl':docpl,'city':city,'date':date}
                else:
                    zero="zero"
                    args={'zero':zero,'city':city}
                return render(request,'home/doctors-list.html', args)
    
    docpl=User.objects.filter(doctorpl__city__icontains=city)
    if docpl.count() > 0:
        args={'docpl':docpl,'city':city,'date':date}
    else:
        zero="zero"
        args={'zero':zero,'city':city}
    return render(request,'home/doctors-list.html', args)

def doc_list_spec(request, city,spec):
    date=datetime.datetime.now().strftime ("%Y-%m-%d")
    if city == "all":
        docpl=User.objects.filter(Q(spec__spec__icontains=spec))
    elif spec== "all":
        docpl=User.objects.filter(Q(doctorpl__city__icontains=city))
    else:
        docpl=User.objects.filter(
            Q(doctorpl__city__icontains=city)  
                & Q(spec__spec__icontains=spec))
    if docpl.count() > 0:
        args={'docpl':docpl,'city':city,'date':date}
    else:
        zero="zero"
        args={'zero':zero,'city':city}
    return render(request,'home/doctors-list.html', args)
def patientlogin(request):
    number=random.randint(10000,99999999)
    if request.method == 'POST':
        if request.POST.get('patient_login'):
            patient_email = request.POST.get('email')
            check=patient_user.objects.filter(email=patient_email)
            if check.count() > 0 :
                patient_user.objects.filter(email=patient_email).update(otp=number)
            else:
                insert=patient_user(email=patient_email,otp=number)
                insert.save()
            port = 465
            password = ".YV.o,h9.%ZN"
            host = "doc2.themartadm.com"
            sender_email = "doctor@doc2.themartadm.com"
            context = ssl.create_default_context()
            try:
                with smtplib.SMTP_SSL(host=host, port=port, context=context) as server:
                    server.login(sender_email, password)
                    msg = MIMEMultipart()
                    message = 'below is your one time password use it to login to DOC {}'.format(number)
                    # setup the parameters of the message
                    msg['From'] = sender_email
                    msg['To'] = patient_email
                    msg['Subject'] = "Email Subject"

                    msg.attach(MIMEText(message, 'plain'))

                    server.send_message(msg)

                    del msg
            except Exception as e:
                print(e)
            args={'email':patient_email}
            return render(request,'home/patient_login.html', args)
        if request.POST.get('patient_login2'):
            patient_email = request.POST.get('email')
            otp=request.POST.get('otp')
            user=patient_user.objects.filter(email=patient_email)
            if user.count() > 0 :
                if user[0].otp == otp :
                    request.session['patient_user']=user[0].id
                    if 'patient_user' in request.session:
                        msg="Loged in successfully.Now you can book appointment"
                    else:
                        return HttpResponse('error')
                else:
                    msg="OTP is incorrect"
                args={'msg':msg}
                return render(request,'home/patient_login.html', args)
    args={}
    return render(request,'home/patient_login.html', args)

def doc_detail(request,userid):
    old_views=Profile.objects.get(user=userid)
    new_views=old_views.views+1
    views=Profile.objects.filter(user=userid).update(
                        views=new_views)
    user=User.objects.filter(id=userid)
    args={'users':user}

    return render(request,'home/doctor-detail.html', args)
def book_ap(request,userid): 
    if request.session.get('patient_user'):
        user=User.objects.filter(id=userid)
        if request.method == 'POST':
            if request.POST.get('bookap2'):
                pl=request.POST.get('pl')
                time=request.POST.get('time')
                date=request.POST.get('date')
                args={'users':user,'pl':pl,'time':time,'date':date}
                return render(request,'home/book_appointment2.html', args)
            if request.POST.get('bookap3'):
                pl=request.POST.get('pl')
                pl_q=PracticeLocation.objects.filter(id=pl)
                pl=pl_q[0].name
                time=request.POST.get('time')
                date=request.POST.get('date')
                email=request.POST.get('email')
                service=request.POST.get('service')
                mobile_no=request.POST.get('mobile_no')
                gender=request.POST.get('gender')
                age=request.POST.get('age')
                reason=request.POST.get('reason')
                doctorid=request.POST.get('doctorid')
                totalpatients=request.POST.get('total_patients')
                name=request.POST.get('patient_name')
                doctor=User.objects.filter(id=doctorid)
                ap=Appointments()
                ap.doctorid=doctor[0]
                ap.pl=pl
                ap.time=time
                ap.date=date
                ap.patient_email=email
                ap.service=service
                ap.patient_phone=mobile_no
                ap.patient_age=age
                ap.reason=reason
                ap.total_patients=totalpatients
                ap.patient_name=name
                ap.save()
                args={'users':user,'name':name,'reason':reason,'doctor':doctor,'pl':pl,'date':date,'time':time,'service':service}
                return render(request,'home/appointment_success.html', args)
        args={'users':user}
        return render(request,'home/book_appointment.html', args)

@login_required
def dashboard(request, pk=None):
    user = User.objects.get(id=request.user.id)
    now = datetime.datetime.now()
    profile=Profile.objects.filter(user=user).get()
    appointments=Profile.objects.filter(user=user).get()
    future_appointments = Appointments.objects.filter(doctorid=user,date__gt=now).count()
    tota_appointments = Appointments.objects.filter(doctorid=user,date__gt=now).count()
    docappointments=Appointments.objects.filter(doctorid=request.user.id)
    if request.method == 'POST':
        if request.POST.get('search_appointment'):
            date = request.POST.get('date')
            searched_patient = Appointments.objects.filter(Q(date=date) & Q(doctorid=request.user.id))
            args={'searched_patient':searched_patient,'date':date,'profile': profile,'t':tota_appointments,'f':future_appointments}
            return render(request, 'home/dashboard.html', args)
    args = {'profile': profile,'appointments':appointments,'t':tota_appointments,'docappointments':docappointments,'f':future_appointments}
    return render(request, 'home/dashboard.html', args)
def ps(request):
    return render(request,'home/change_password_success.html',{})
@login_required
def change_password(request):
    user = User.objects.get(id=request.user.id)
    profile=Profile.objects.filter(user=user).get()
    if request.method == 'POST':
        form = PasswordChangeForm(request.user, request.POST)
        if form.is_valid():
            user = form.save()
            update_session_auth_hash(request, user)  # Important!
            messages.success(request, 'Your password was successfully updated!')
            return redirect('ps')
        else:
            messages.error(request, 'Please correct the error below.')
    else:
        form = PasswordChangeForm(request.user)
    user = User.objects.get(id=request.user.id)
    profile=Profile.objects.filter(user=user).get()
    args = {'profile': profile,'form': form}
    return render(request, 'home/change_password.html', args)
@login_required
def UpdateContactInfo(request):
    user = User.objects.get(id=request.user.id)
    profile = get_object_or_404(Profile, user=user)
    user2 = get_object_or_404(User, username=request.user.username)
    if request.method == "POST":
        form = ProfileForm(request.POST, instance=profile)
        user_form = ProfileForm2(request.POST, instance=user2)
        if form.is_valid():
            profile_f = form.save(commit=False)
            user_f = form.save(commit=False)
            profile_f.save()
            user_f.save()
            messages.success(request, 'Contact info updated...!')
            form = ProfileForm(instance=profile)
            user_form = ProfileForm2(instance=user2)
            return render(request, 'home/contact_info.html', {'form': form,'user_form': user_form})
    else:
        form = ProfileForm(instance=profile)
        user_form = ProfileForm2(instance=user2)
    return render(request, 'home/contact_info.html', {'form': form,'user_form': user_form,'profile':profile})

@login_required
def PracticeL(request):
    user=get_object_or_404(User, pk=request.user.id)
    profile=Profile.objects.filter(user=user).get()
    dpl=DoctorSchedule.objects.filter(userid=request.user.id)
    if request.method == 'POST':
        if request.POST.get('pl_name'):
            name = request.POST.get('pl_name')
            searched_practice_location = PracticeLocation.objects.filter(Q(name__icontains=name))
            args={'searched_practce_location':searched_practice_location,'dpl2':dpl,'profile':profile}
            return render(request, 'home/practice_location.html', args)
        if request.POST.get('save_pl'):
            #insert into doctor practice location
            check=DoctorSchedule.objects.filter(userid=request.user.id,pl=request.POST.get('pl_checkbox'))
            if check.count() > 0 :
                error='You have already added this practice location in your account'
                args={'error':error,'dpl2':dpl,'profile':profile}
                return render(request, 'home/practice_location.html', args)
            else:
                DoctorPL2=DoctorPL()
                practice_location_selected_id=request.POST.get('pl_checkbox')
                practice_location = PracticeLocation.objects.get(id=practice_location_selected_id)
                DoctorPL2.userid=user
                DoctorPL2.pl=practice_location.id
                DoctorPL2.name=practice_location.name
                DoctorPL2.phone=practice_location.phone
                DoctorPL2.email=practice_location.email
                DoctorPL2.city=practice_location.city
                DoctorPL2.consultation_fee=practice_location.consultation_fee
                DoctorPL2.postal_address=practice_location.postal_address
                DoctorPL2.save()
                #insert into doctor schedule
                DoctorSchedule2=DoctorSchedule()
                DoctorSchedule2.userid=user
                DoctorSchedule2.pl= PracticeLocation.objects.get(id=practice_location_selected_id)
                DoctorSchedule2.start_time='4:00'
                DoctorSchedule2.finish_time='7:00'
                DoctorSchedule2.save()
                DoctorSetting2=PLSettings()
                DoctorSetting2.userid=user
                DoctorSetting2.pl=PracticeLocation.objects.get(id=practice_location_selected_id)
                DoctorSetting2.save()
                success='1'
                args={'success':success,'dpl2':dpl,'profile':profile}
                return render(request, 'home/practice_location.html', args)
        if request.POST.get('update_schedule'):
            s_id=request.POST.get('schedule_id')
            pl_id=request.POST.get('p_id')
            check=DoctorSchedule.objects.filter(userid=request.user.id,pl=request.POST.get('pl_id'))
            if check.count() > 0 :
                sun=request.POST.get('sun')
                mon=request.POST.get('mon')
                tue=request.POST.get('tue')
                wed=request.POST.get('wed')
                thu=request.POST.get('thu')
                fri=request.POST.get('fri')
                sat=request.POST.get('sat')
                start_time=request.POST.get('start_time')
                finish_time=request.POST.get('end_time')
                DoctorSchedule.objects.filter(userid=request.user.id,pl=request.POST.get('pl_id')).update(
                    sun=sun, mon=mon,tue=tue,wed=wed,thu=thu,fri=fri,sat=sat,start_time=start_time,finish_time=finish_time)
            else:
                error='You have already added this practice location in your account'
                args={'error':error,'dpl2':dpl,'profile':profile}
                return render(request, 'home/practice_location.html', args)
    return render(request, 'home/practice_location.html', {'dpl2':dpl})

@login_required
def AddPracticeL(request):
    user = User.objects.get(id=request.user.id)
    profile=Profile.objects.filter(user=user).get()
    if request.method == 'POST':
        form = AddPracticeLocation(request.POST)
        if form.is_valid():
            user = form.save()  # Important!
            messages.success(request, 'Your practice location is added successfully!')
            return redirect('PL')
        else:
            messages.error(request, 'Please correct the error below.')
    else:
        form = AddPracticeLocation()
    args = {'form': form,'profile':profile}
    return render(request, 'home/add_practice_location.html', args)
@login_required
def DeletePl(request, cat):
        dpl=DoctorSchedule.objects.filter(userid=request.user.id)
        try:
            dpl_d = DoctorPL.objects.get(pl=cat,userid=request.user.id)  
        except DoctorPL.DoesNotExist:
            raise Http404("Access Denied")
        dpl_d.delete()
        ds_d = DoctorSchedule.objects.get(pl=cat,userid=request.user.id)
        ds_d.delete()
        d_setting=PLSettings.objects.get(pl=cat,userid=request.user.id)
        d_setting.delete()
        success='Practice Location deleted successful'
        return redirect('PL')
@login_required
def PlSettings(request):
    user = User.objects.get(id=request.user.id)
    profile=Profile.objects.filter(user=user).get()
    dpl=PLSettings.objects.filter(userid=request.user.id)
    if request.method == 'POST':
        if request.POST['pl_id']:
            s_id=request.POST.get('setting_id')
            pl_id=request.POST.get('pl_id')
            check=PLSettings.objects.filter(userid=request.user.id,pl=request.POST.get('pl_id'))
            if check.count() > 0 :
                slot_duration=request.POST.get('slot_duration')
                slot_capacity=request.POST.get('slot_capacity')
                min_time_before_appointment=request.POST.get('min_time_before_appointment')
                allow_online_booking=request.POST.get('allow_online_booking')
                future_appointment_days=request.POST.get('future_appointment_days')
                reminder_hours=request.POST.get('reminder_hours')
                email_notification=request.POST.get('email_notification')
                booking_sms_external=request.POST.get('booking_sms_external')
                booking_sms_internal=request.POST.get('booking_sms_internal')
                fee=request.POST.get('fee')
                prepayment=request.POST.get('allow_prepayment')
                prepayment_amount=request.POST.get('prepayment_amount')
                prepayment_full_partial=request.POST.get('prepayment_full_partial')
                show_visit_payments=request.POST.get('show_visit_payment')
                PLSettings.objects.filter(userid=request.user.id,pl=request.POST.get('pl_id')).update(
                        slot_duration=slot_duration,
                         slot_capacity=slot_capacity,
                         min_time_before_appointment=min_time_before_appointment,
                         online_booking=allow_online_booking,
                         future_appointment_days=future_appointment_days,
                         reminder_hours=reminder_hours,
                         email_notification=email_notification,
                         booking_sms_external=booking_sms_external,
                        booking_sms_internal=booking_sms_internal,
                        fee=fee,
                        prepayment=prepayment,
                        prepayment_amount=prepayment_amount,
                        prepayment_full_partial=prepayment_full_partial,
                        show_visit_payment=show_visit_payments
                        )
                success='Practice location updated successfully'
                args={'success':success,'dpl':dpl,'profile':profile}
                return render(request,'home/settings.html', args)
            else:
                error='You dont have this practice_location in your account'
                args={'error':error,'dpl':dpl,'profile':profile}
                return render(request,'home/settings.html', args)
        else:
            error=request.POST.get('pl_id')
            args={'error':error,'dpl':dpl,'profile':profile}
            return render(request,'home/settings.html', args)
        if request.POST['us']:
            error=request.POST.get('usama')
            args={'error':error,'dpl':dpl,'profile':profile}
            return render(request,'home/settings.html', args)
    args={'dpl':dpl,'profile':profile}
    return render(request,'home/settings.html', args)

def DocAnalytics(request):
    user = User.objects.get(id=request.user.id)
    profile=Profile.objects.filter(user=user).get()
    analytics=Analytics.objects.filter(userid=request.user.id)
    total_doctor_share = analytics.aggregate(sum=Sum('doctor_share')).get('sum', 0.00)
    total_received = analytics.aggregate(sum=Sum('received')).get('sum')
    total_hospital_share = analytics.aggregate(sum=Sum('hospital_share')).get('sum')
    args={'analytics':analytics,'total_doctor_share':total_doctor_share,
    'total_hospital_share':total_hospital_share,
    'total_received':total_received,'profile':profile
    }
    return render(request,'home/analytics.html', args)

def DocPatients(request):
    user = User.objects.get(id=request.user.id)
    profile=Profile.objects.filter(user=user).get()
    docpatientq=DocPatient.objects.filter(doctorid=request.user.id)
    if request.method == 'POST':
        if request.POST.get('patient'):
            name = request.POST.get('patient')
            searched_patient = DocPatient.objects.filter((Q(name__icontains=name) | Q(phone__icontains=name))&Q(doctorid=request.user.id))
            args={'searched_patient':searched_patient,'name':name,'profile':profile}
            return render(request, 'home/doc_patient.html', args)
    args={'docpatientq':docpatientq,'profile':profile}
    return render(request,'home/doc_patient.html', args)

def DocAppointment(request):
    user = User.objects.get(id=request.user.id)
    profile=Profile.objects.filter(user=user).get()
    docappointments=Appointments.objects.filter(doctorid=request.user.id)
    args={'docappointments':docappointments,'profile':profile}
    return render(request,'home/appointments.html', args)

def EditProfile(request):
    user = User.objects.get(id=request.user.id)
    profile=Profile.objects.filter(user=user).get()
    docimages=images.objects.filter(user=request.user.id)
    docaboutq=docaboutm.objects.filter(user=request.user.id)
    docpromembershipq=docpromembershipm.objects.filter(user=request.user.id)
    docawardsq=docawardsm.objects.filter(user=request.user.id)
    docexpq=docexpm.objects.filter(user=request.user.id)
    docservicesq=docservicesm.objects.filter(user=request.user.id)
    docspecq=docspecm.objects.filter(user=request.user.id)
    doceduq=docedum.objects.filter(user=request.user.id)
    docabout2=docabout()
    docpromembership2=docpromembership()
    docawards2=docawards()
    docexp2=docexp()
    docservices2=docservices()
    docspec2=docspec()
    docedu2=docedu()
    yearsofexpe=yearsofexp()
    profileimage = ProfileImage()
    feeofdoct = feeofdoc()
    if request.method == 'POST':
       docspec4=docspec(request.POST)
       if docspec4.is_valid():
            post = docspec4.save(commit=False)
            post.user = request.user
            post.save()  
       docservices4=docservices(request.POST)
       if docservices4.is_valid():
            post = docservices4.save(commit=False)
            post.user = request.user
            post.save()
       docexp4=docexp(request.POST)
       if docexp4.is_valid():
            post = docexp4.save(commit=False)
            post.user = request.user
            post.save()
       docawards4=docawards(request.POST)
       if docawards4.is_valid():
            post = docawards4.save(commit=False)
            post.user = request.user
            post.save()
       docpromembership4=docpromembership(request.POST)
       if docpromembership4.is_valid():
            post = docpromembership4.save(commit=False)
            post.user = request.user
            post.save()
       docabout4=docabout(request.POST)
       if docabout4.is_valid():
            docabout5=docaboutm.objects.filter(user=request.user.id)
            docabout5.delete()
            post = docabout4.save(commit=False)
            post.user = request.user
            post.save()
       docedu4 = docedu(request.POST)
       if docedu4.is_valid():
            post = docedu4.save(commit=False)
            post.user = request.user
            post.save()
       profileimage = ProfileImage(request.POST, request.FILES)
       if profileimage.is_valid():
            docimages=images.objects.filter(user=request.user.id)
            docimages.delete()
            post = profileimage.save(commit=False)
            post.user = request.user
            post.save()
            success='Image updated successfully'
            args={'docimages':docimages,'profile':profile,
                'profileimage':profileimage,'success':success,
                #forms
                'yearsofexp':yearsofexpe,'feeofdoc':feeofdoct,
                'docabout':docabout2,'docawards':docawards,
                'docpromembership':docpromembership2,'docexp':docexp2,
                'docservices':docservices2,'docspec':docspec2,'docedu':docedu2,
                #model queries
                'docaboutq':docaboutq,'docawardsq':docawardsq,
                'docpromembershipq':docpromembershipq,'docexpq':docexpq,
                'docservicesq':docservicesq,'docspecq':docspecq,'doceduq':doceduq}
            return render(request,'home/edit_profile.html', args)
       else:
            error='Invalid'
            args={'docimages':docimages,'profile':profile,'profileimage':profileimage,
            'error':error,
            #forms
            'yearsofexp':yearsofexpe,'feeofdoc':feeofdoct,
            'docabout':docabout2,'docawards':docawards,
            'docpromembership':docpromembership2,'docexp':docexp2,
            'docservices':docservices2,'docspec':docspec2,'docedu':docedu2,
            #model queries
            'docaboutq':docaboutq,'docawardsq':docawardsq,
            'docpromembershipq':docpromembershipq,'docexpq':docexpq,
            'docservicesq':docservicesq,'docspecq':docspecq,'doceduq':doceduq}
            return render(request,'home/edit_profile.html', args)
    else:
        args={'docimages':docimages,'profile':profile,'profileimage':profileimage,
        #forms
        'yearsofexp':yearsofexpe,'feeofdoc':feeofdoct,
        'docabout':docabout2,'docawards':docawards,
        'docpromembership':docpromembership2,'docexp':docexp2,
        'docservices':docservices2,'docspec':docspec2,'docedu':docedu2,
        #model queries
        'docaboutq':docaboutq,'docawardsq':docawardsq,
        'docpromembershipq':docpromembershipq,'docexpq':docexpq,
        'docservicesq':docservicesq,'docspecq':docspecq,'doceduq':doceduq
        }
        return render(request,'home/edit_profile.html', args)

#delete views of edit profile page
@login_required
def deleteedu(request, cat):
        doceduq=docedum.objects.filter(user=request.user.id)
        try:
            docedu_d = docedum.objects.get(id=cat,user=request.user.id)  
        except docedum.DoesNotExist:
            raise Http404("Access Denied")
        docedu_d.delete()
        success='deleted successfuly'
        return redirect('edit-profile')

@login_required
def deletespec(request, cat):
        docspecq=docspecm.objects.filter(user=request.user.id)
        try:
            docspec_d = docspecm.objects.get(id=cat,user=request.user.id)  
        except docspecm.DoesNotExist:
            raise Http404("Access Denied")
        docspec_d.delete()
        success='deleted successfuly'
        return redirect('edit-profile')
@login_required
def deleteservice(request, cat):
        docserviceq=docservicesm.objects.filter(user=request.user.id)
        try:
            docservice_d = docservicesm.objects.get(id=cat,user=request.user.id)  
        except docservicesm.DoesNotExist:
            raise Http404("Access Denied")
        docservice_d.delete()
        success='deleted successfuly'
        return redirect('edit-profile')
@login_required
def deleteexp(request, cat):
        docexpq=docexpm.objects.filter(user=request.user.id)
        try:
            docexp_d = docexpm.objects.get(id=cat,user=request.user.id)  
        except docexpm.DoesNotExist:
            raise Http404("Access Denied")
        docexp_d.delete()
        success='deleted successfuly'
        return redirect('edit-profile')
@login_required
def deleteaward(request, cat):
        docawardq=docawardsm.objects.filter(user=request.user.id)
        try:
            docaward_d = docawardsm.objects.get(id=cat,user=request.user.id)  
        except docawardsm.DoesNotExist:
            raise Http404("Access Denied")
        docaward_d.delete()
        success='deleted successfuly'
        return redirect('edit-profile')
@login_required
def deletepromembership(request, cat):
        docpromembershipq=docpromembershipm.objects.filter(user=request.user.id)
        try:
            docpromembership_d = docpromembershipm.objects.get(id=cat,user=request.user.id)  
        except docpromembershipm.DoesNotExist:
            raise Http404("Access Denied")
        docpromembership_d.delete()
        success='deleted successfuly'
        return redirect('edit-profile')
@login_required
def deletedocabout(request, cat):
        docaboutq=docaboutm.objects.filter(user=request.user.id)
        try:
            docabout_d = docaboutm.objects.get(id=cat,user=request.user.id)  
        except docaboutm.DoesNotExist:
            raise Http404("Access Denied")
        docabout_d.delete()
        success='deleted successfuly'
        return redirect('edit-profile')




