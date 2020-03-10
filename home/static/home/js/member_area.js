// dashboard areas related jsvascript.

// notes and patient complaint bullets
/* $(document).on("focus", "#pt_complaint", function(event) {
    if(document.getElementById('pt_complaint').value === ''){
        document.getElementById('pt_complaint').value +='• ';
	}
});
$(document).on("keyup", "#pt_complaint", function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        document.getElementById('pt_complaint').value +='• ';
	}
	var txtval = document.getElementById('pt_complaint').value;
	if(txtval.substr(txtval.length - 1) == '\n'){
		document.getElementById('pt_complaint').value = txtval.substring(0,txtval.length - 1);
	}
});



 $(document).on("focus", "#doc_notes", function(event) {
    if(document.getElementById('doc_notes').value === ''){
        document.getElementById('doc_notes').value +='• ';
	}
});
$(document).on("keyup", "#doc_notes", function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        document.getElementById('doc_notes').value +='• ';
	}
	var txtval = document.getElementById('doc_notes').value;
	if(txtval.substr(txtval.length - 1) == '\n'){
		document.getElementById('doc_notes').value = txtval.substring(0,txtval.length - 1);
	}
});
*/


var linestart = function(txt, st) {
    var ls = txt.split("\n");
	console.log(txt);
	console.log(st);
    var i = ls.length-1;
	console.log(i);
	console.log(st+ls[i]);
    ls[i] = st+ls[i];
    return ls.join("\n");
  };
  
   $(document).on("keydown", ".pt_complaint", function(e) {

    var t = $(this);
    if(e.which == 13) {
      t.val(linestart(t.val(), '• ') + "\n");
      return false;
    }  
  });
  
  
/*     $(document).on("focus", ".pt_complaint", function(e) {

    var t = $(this);
    if(t.val() === '') {
       t.val(linestart(t.val(), '• '));
      return false;
    }  
  });
  
  
  
  
     $(document).on("focus", ".doc_notes", function(e) {

    var t = $(this);
    if(t.val() === '') {
      t.val(linestart(t.val(), '• '));
      return false;
    }  
  });*/
  
   $(document).on("keydown", ".doc_notes", function(e) {

    var t = $(this);
    if(e.which == 13) {
      t.val(linestart(t.val(), '• ') + "\n");
      return false;
    } 
	
  	
	 
  });
  

  
  
  
  function ValidatePayBill(){

		var flg = 0;
		  if($.trim($('#pay_details').val())=="" ){
		   $("#error_pay_details").html('Please enter description');
		   $('#pay_details').addClass('invalid');
			if(flg==0){
			   flg = flg+1;
			}
		 }else{
			 $('#pay_details').removeClass('invalid');
			  $("#error_pay_details").html('');
		 }
		 
		 
		 
		 if($.trim($('#pay_payment_amount').val())=="" ){
		   $("#error_pay_payment_amount").html('Please enter amount');
		   $('#pay_payment_amount').addClass('invalid');
			if(flg==0){
			   flg = flg+1;
			}
		 }else{
			 $('#pay_payment_amount').removeClass('invalid');
			  $("#error_pay_payment_amount").html('');
		 }
		  var regex = /^\d+(\.\d{2,2})?$/;
		 if($.trim($('#pay_payment_amount').val())!="" ){		 
			 var amount = $.trim($('#pay_payment_amount').val());
			 if(amount == '' || amount <= 0 || regex.test(amount) == false){
			   $("#error_pay_payment_amount").html('Please enter a valid amount');
			   $('#pay_payment_amount').addClass('invalid');
				if(flg==0){
				   flg = flg+1;
				}

			}else{
				 $('#pay_payment_amount').removeClass('invalid');
				  $("#error_pay_payment_amount").html('');
				
			}				 
		 }


		   if($.trim($('#pay_payment_date').val())=="" ){
		   $("#error_payment_date").html('Please select date');
		   $('#pay_payment_date').addClass('invalid');
			if(flg==0){
			   flg = flg+1;
			}
		 }else{
			 $('#pay_payment_date').removeClass('invalid');
			  $("#error_payment_date").html('');
		 }

		  
		  if($.trim($('#pay_allocate_to').val())=="" ){
		   $("#error_pay_to").html('Please select allocate to');
		   $('#pay_allocate_to').addClass('invalid');
			if(flg==0){
			   flg = flg+1;
			}
		 }else{
			 $('#pay_allocate_to').removeClass('invalid');
			  $("#error_pay_to").html('');
		 }
		 //.............................................
		  if(flg==0){
			return true;		
			  
			  //return true;
		  }else {
			 return false;
		  }
	   
      
      
      
  }

  function Validatereceivpayment(){
     
		var flg = 0;
		  if($.trim($('#receipt_details').val())=="" ){
		   $("#error_receipt_details").html('Please enter description');
		   $('#receipt_details').addClass('invalid');
			if(flg==0){
			   flg = flg+1;
			}
		 }else{
			 $('#receipt_details').removeClass('invalid');
			  $("#error_receipt_details").html('');
		 }
		 
		 
		 
		 if($.trim($('#receipt_payment_amount').val())=="" ){
		   $("#error_receipt_payment_amount").html('Please enter amount');
		   $('#receipt_payment_amount').addClass('invalid');
			if(flg==0){
			   flg = flg+1;
			}
		 }else{
			 $('#receipt_payment_amount').removeClass('invalid');
			  $("#error_receipt_payment_amount").html('');
		 }
		  var regex = /^\d+(\.\d{2,2})?$/;
		 if($.trim($('#pay_payment_amount').val())!="" ){		 
			 var amount = $.trim($('#pay_payment_amount').val());
			 if(amount == '' || amount <= 0 || regex.test(amount) == false){
			   $("#error_pay_payment_amount").html('Please enter a valid amount');
			   $('#pay_payment_amount').addClass('invalid');
				if(flg==0){
				   flg = flg+1;
				}

			}else{
				 $('#pay_payment_amount').removeClass('invalid');
				  $("#error_pay_payment_amount").html('');
				
			}				 
		 }


		   if($.trim($('#receipt_payment_date').val())=="" ){
		   $("#error_receipt_date").html('Please select date');
		   $('#receipt_payment_date').addClass('invalid');
			if(flg==0){
			   flg = flg+1;
			}
		 }else{
			 $('#receipt_payment_date').removeClass('invalid');
			  $("#error_receipt_date").html('');
		 }

		  
		  if($.trim($('#receipt_from').val())=="" ){
		   $("#error_receipt_from").html('Please select allocate to');
		   $('#receipt_from').addClass('invalid');
			if(flg==0){
			   flg = flg+1;
			}
		 }else{
			 $('#receipt_from').removeClass('invalid');
			  $("#error_receipt_from").html('');
		 }
		 //.............................................
		  if(flg==0){
                     
			return true;		
			  
			  //return true;
		  }else {  
			 return false;
		  }
  
  }


//submit payment form
   $('#frm_pay').submit(function (event) {
       
               var formData  =  $('#frm_pay').serializeArray();
                // process the form
                $.ajax({
                type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
                url: '/user/save_payment', // the url where we want to POST
                data: formData, // our data object
                dataType: 'json', // what type of data do we expect back from the server
                beforeSend: function () {
                $('.rquest-image').show();
                },
                 success: function (response) {
                  var obj = eval(response);
                  if (obj){
                          transaction_summry();
                          transaction_summry();
                  if (obj.error == 0) {
                        //refresh_list(prov,subs,prov_name);
                    $('#frm_pay')[0].reset();
                    $("#modal_pay_bill").modal('hide');
                    
                     } else {
                     $("#modal_pay_bill").modal('hide');
                     }
                      }
                          },
                    complete: function () {
                        $('.rquest-image').hide();
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert("error occured");
                    }
                });
                // stop the form from submitting the normal way and refreshing the page
                event.preventDefault();
                });



  $('#frm_payment_receipt').submit(function (event) {
      
               var formData  =  $('#frm_payment_receipt').serializeArray();
                // process the form
                $.ajax({
                type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
                url: '/user/save_receipt', // the url where we want to POST
                data: formData, // our data object
                dataType: 'json', // what type of data do we expect back from the server
                beforeSend: function () {
                $('.rquest-image').show();
                },
                 success: function (response) {
                  var obj = eval(response);
                  if (obj){
                        transaction_summry();
                        transaction_summry();
                  if (obj.error == 0) {
                        //refresh_list(prov,subs,prov_name);
                     $('#frm_payment_receipt')[0].reset();
                    $("#modal_receive_payment").modal('hide');
                     } else {
                     $("#modal_receive_payment").modal('hide');
                     }
                      }
                          },
                    complete: function () {
                        $('.rquest-image').hide();
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert("error occured");
                    }
                });
                // stop the form from submitting the normal way and refreshing the page
                event.preventDefault();
                });
//==========================================================================

function revert_transaction(id,flag){
  
       bootbox.confirm("Are you sure you want to delete Transaction?", function (result) {
                if (result) {
                    // process the form
                    var csrf = $('input[name="ci_csrf_token"]').val();
                    dataString = {trans_id: id, flag: flag,ci_csrf_token: csrf,};
                    $.ajax({
                        type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
                        url: '/user/revert_transaction/', // the url where we want to POST
                        data: dataString, // our data object
                        dataType: 'json', // what type of data do we expect back from the server
                        beforeSend: function () {
                            //$('.rquest-image').show();
                        },
                        success: function (response) {
                            var obj = eval(response);
                            if (obj){
                                if (obj.error == 0) {
                                      transaction_summry();
                                        transaction_summry();
                                        get_total_payments();
                                        get_total_receipts();
                                    $(document).myBSAlerts({
                                        messageText: 'Transacrion Reverted',
                                        type: 'alert'
                                    });
                                    
                                } else {
                                    $(document).myBSAlerts({
                                        messageText: 'Cannot Complete Action Please try later',
                                        type: 'alert'
                                    });
                                }

                            }
                        },
                        complete: function () {                   
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                        }
                    });
                } else {
                    console.log("User declined dialog");
                }
            });
    
    
    
    
}

//save hospital settings

  $('#frm_save_subs_setting').submit(function (event) {
               var formData  =  $('#frm_save_subs_setting').serializeArray();
               $(".subs-settings-success").hide();
               $(".subs-settings-error").hide();
                // process the form
                $.ajax({
                type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
                url: '/user/save_subscription_settings', // the url where we want to POST
                data: formData, // our data object
                dataType: 'json', // what type of data do we expect back from the server
                beforeSend: function () {
                $('.request-image').show();
                },
                 success: function (response) {
                  var obj = eval(response);
                  if (obj){
                  if (obj.error == 0) {
                        $(".subs-settings-success").show();
                     } else {
                      $(".subs-settings-error").show();
                     }
                      }
                          },
                    complete: function () {
                        $('.request-image').hide();
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert("error occured");
                    }
                });
                // stop the form from submitting the normal way and refreshing the page
                event.preventDefault();
                });


$(".subs-settings-success").hide();
$(".subs-settings-error").hide();

function delete_today_appointments(doctor_id,hospital_id,doctor_name){
  bootbox.confirm("Are you sure you want to cancel today's appointments ?", function (result) {
  if (result) {
  var csrf = $('input[name="ci_csrf_token"]').val();  
  $.post('/user/delete_all_appointments', {doctor_id: doctor_id,ci_csrf_token: csrf}, function (data) {
			var obj = eval(data);
			if (obj.error == 0) {
                            refresh_list(doctor_id,hospital_id,doctor_name);
			}else{
                            alert(obj.data);
                            
                 }
    	       }, "json");
    
            }
        });
    }
    
    
    
    function move_appos(doctor_id,hospital_id,doctor_name){

        bootbox.prompt({
    title: "Enter time in minutes to move appointments!",
    inputType: 'number',
    callback: function (result) {
        if(result){
      var csrf = $('input[name="ci_csrf_token"]').val();  
  $.post('/user/move_all_appointments', {doctor_id: doctor_id,ci_csrf_token: csrf,minuts:result,subs_id:hospital_id}, function (data) {
			var obj = eval(data);
			if (obj.error == 0) {
                            refresh_list(doctor_id,hospital_id,doctor_name);
			}else{
                            alert(obj.data);
                            
                 }
    	       }, "json"); 
    }
}
});
        
        
    }

// delete doctor location from dashboard
function delete_doctor_location(hospital_id){
    
     bootbox.confirm("Are you sure you want to delete location ?", function (result) {
  if (result) {
  var csrf = $('input[name="ci_csrf_token"]').val();  
  $.post('/h_delete', {hospital_id: hospital_id,ci_csrf_token: csrf}, function (data) {
			var obj = eval(data);
			if (obj.error == 0) {
                            bootbox.alert(obj.data);
                            $("#doctor_location_"+hospital_id).remove();
			}else{
                          bootbox.alert(obj.data);  
                            
                 }
    	       }, "json");
    
            }
        });
    
}


var book_patient = '';
function book_followup(patient_id){
   // alert("test");
    var hash = '#memberArea1',
    lis = $("ul.resp-tabs-list > li");
    lis.removeClass("resp-tab-active");
    $("ul.resp-tabs-list li:nth-child(1)").addClass("resp-tab-active");
    $("ul.resp-tabs-list li:nth-child(1)").click();

    //var link = "/appointment/"+selected_subscription+'/'+doctor_id;
   // window.location= link;

   book_patient =  patient_id;
}


function staff_book(doctor_id){
    if (book_patient){
       book_patient =  md5(book_patient);
        var link = "/appointment/"+selected_subscription+'/'+doctor_id+"?patient="+book_patient+"";
        window.open(link, '_blank');  
    } else {
        var link = "/appointment/"+selected_subscription+'/'+doctor_id;
        window.open(link, '_blank');  
    }
}

$("#txtPatientPhoneAdd").change(function(){
  var csrf       = $('input[name="ci_csrf_token"]').val();
  var phone      = $(this).val();
  var name       = $("#txtPatientNameAdd").val();
  
  $.post('/patient_management/checkpatient', {phone: phone,name:name,hospital_id:selected_subscription,ci_csrf_token: csrf}, function (data) {
			var obj = eval(data);
			if (obj.error == 1) {
                            bootbox.alert("Patient already exists");
                            $("#btnPatientSubmitAdd").attr("disabled","");
			}else{
                            $("#btnPatientSubmitAdd").removeAttr("disabled","");
                        }
    	       }, "json");
                    
});

//=============================================================================


$('#frm_addpatient').submit(function (event) {
    var csrf       = $('input[name="ci_csrf_token"]').val();
               var formData  =  $('#frm_addpatient').serialize();
               //formData.push({hospital_id: selected_subscription,ci_csrf_token: csrf});
              $.post('/patient_management/addpatient',formData, function (data) {
			var obj = eval(data);
			if (obj.error == 1) {
                            bootbox.alert("Cannot add patient details. Please try later");
                            
			}else{
                             $('#frm_addpatient')[0].reset();
                            $(".add-patient-holder").slideToggle();  
                            bootbox.alert("Patient details saved.");
                        }
    	       }, "json"); 
               
             event.preventDefault();  
               
});

  $("#btnAddPatient").click(function(){
  $(".add-patient-holder").slideToggle();
  $(".patients-data-container").slideToggle();
    
});

function load_notes(patient_id,counter){
   $.post('/patient_management/load_notes',{patient_id:patient_id}, function (data) {
			var obj = eval(data);
			if (obj.error == 0) {
                         if(obj.data){
                            if(obj.data.patient_complaint){ 
                            $('#frm_save_notes'+patient_id+' #pt_complaint').val(obj.data.patient_complaint);
                         }
                            if(obj.data.doctor_notes){
                            $('#frm_save_notes'+patient_id+' #doc_notes').val(obj.data.doctor_notes); 
                         }
                       }
	            }
    	       }, "json");  
    
}



function load_vitals(patient_id,counter){
   $.post('/patient_management/load_vitals',{patient_id:patient_id}, function (data) {
			var obj = eval(data);
			if (obj.error == 0) {
                         if(obj.data){
                            $('#frm-save-vitals'+patient_id+' #vitals_id').val(obj.data.id);
                            if(obj.data.temperature){ 
                            $('#frm-save-vitals'+patient_id+' #pt_temp').val(obj.data.temperature);
                            }
                            if(obj.data.bp){
                            $('#frm-save-vitals'+patient_id+' #pt_bp').val(obj.data.pt_bp); 
                            }
                            
                             if(obj.data.heart_rate){
                            $('#frm-save-vitals'+patient_id+' #pt_hrate').val(obj.data.heart_rate); 
                            }
                            
                            
                             if(obj.data.respiration_rate){
                            $('#frm-save-vitals'+patient_id+' #pt_resprate').val(obj.data.respiration_rate); 
                            }
                            
                            
                             if(obj.data.weight){
                            $('#frm-save-vitals'+patient_id+' #pt_weight').val(obj.data.weight); 
                            }
                            
                            
                             if(obj.data.blood_sugar){
                            $('#frm-save-vitals'+patient_id+' #pt_bldsugar').val(obj.data.blood_sugar); 
                            }
                            
                            
                             if(obj.data.others){
                            $('#frm-save-vitals'+patient_id+' #pt_others').val(obj.data.others); 
                            }
                            
                       }
	            }
    	       }, "json");  
    
}

function load_prescription(patient_id,counter){
    
       $.post('/patient_management/load_notes',{patient_id:patient_id}, function (data) {
			var obj = eval(data);
			if (obj.error == 0) {
                         if(obj.data){
                            if(obj.data.patient_complaint){ 
                            $('#frm_save_prescription'+patient_id+' #patient-complaint').val(obj.data.patient_complaint);
                         }
                            if(obj.data.doctor_notes){
                            $('#frm_save_prescription'+patient_id+' #doctor-notes').val(obj.data.doctor_notes); 
                         }
                       }
	            }
    	       }, "json"); 
    
    
    
    
       $.post('/patient_management/load_prescription',{patient_id:patient_id}, function (data) {
			var obj = eval(data);
			if (obj.error == 0) {
                         if(obj.data){
                            if(obj.data.diagnosis){
                            $('#frm_save_prescription'+patient_id+' #pt_diagnosis').val(obj.data.diagnosis); 
                            }
                         
                         
                            if(obj.data.advice){
                            $('#frm_save_prescription'+patient_id+' #advice').val(obj.data.advice); 
                            }
                            
                           
                            if(obj.data.other_tests){
                            $('#frm_save_prescription'+patient_id+' #other-test').val(obj.data.other_tests); 
                            }
                            $('#frm_save_prescription'+patient_id+' #prescription_id').val(obj.data.id);     
                            
                            
                            if(obj.data.test){
                            var selectedValues = [];   
                            var multiSelect = $("#test").select2();
                            //alert(obj.data[0].ids);
                            //$multiSelect.val(obj.data[0].ids).trigger("change");   
                            var selectedValuesTest = obj.data.test;
                            selectedValuesTest=selectedValuesTest.split(',');
                            multiSelect.select2('val',selectedValuesTest);  
                           }else{
                            $("#test").select2('val','');
                           }
                          
                       }
	            }
    	       }, "json");  
    
}

 function load_visits(patient_id){
              // FETCH PATIENT TIMELINE 
               
                var data ={patient_id:patient_id,subs_id : md5(selected_subscription)};
                $.ajax({
                type: 'GET', // define the type of HTTP verb we want to use (POST for our form)
                url: "/patient_management/fetch_vists/", // the url where we want to POST
                data: data, // our data object
                dataType: 'json', // what type of data do we expect back from the server
                beforeSend: function () {
                 },
                success: function (response) {
                   var obj = eval(response);
                   if (obj.error == 0){
                    $(".patient-visits-container").html(obj.data);
                    }
                 },
                complete: function () {               
                 },
                error: function (xhr, ajaxOptions, thrownError) {
                 }
            });
            } 
 
 function print_visits_summary(patient_id){
       
        window.open('/patient_management/visits_report?patient='+patient_id+'&subs='+md5(selected_subscription)+'','_blank','height=800,width=800');  

 }