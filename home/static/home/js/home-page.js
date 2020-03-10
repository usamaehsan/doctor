let timer = 0;
let timeInterval = null;

function validatePhone(field) {
    phone = field.val();
    filter = /^[\d\s]+$/;
    if (!(filter.test(phone))) {
        return false;
    } else {
        return true;
    }
}
$('#demoRequestForm').on('submit', function(e) {
    e.preventDefault();
    if (validatePhone($('#user_phone'))) {
        $('#user_phone').removeClass('invalid');
        $('.control-label').addClass('d-none');
        $.ajax({
            url: base_url + 'request_demo',
            type: 'POST',
            data: $('#demoRequestForm').serialize(),
            beforeSend: function() {
                var btnLoading = $(this).find('.js-btn-control');
                btnLoading.attr('disabled', 'disabled');
                btnLoading.addClass('loading');
            },
            success: function(data) {
                var obj = JSON.parse(data);
                if (obj.error == 0) {
                    $('#demoRequestForm')[0].reset();
                    $("#demoRequestForm").hide();
                    $('.message-box').removeClass('d-none text-danger').addClass('text-success').html('<p class="m-0 py-4">Thank you for your interest. We will get in touch shortly!</p>');
                } else {
                    $('.message-box').removeClass('d-none').addClass('text-danger').html('<p class="m-0 py-4">Cannot send demo request please try again later!</p>');
                }
            },
            complete: function() {},
            error: function(xhr, ajaxOptions, thrownError) {
                $(".message-box").removeClass('d-none').addClass('text-danger').html('<p class="m-0 py-4">Cannot place order please try later.</p>');
            }
        });
    } else {
        $('#user_phone').addClass('invalid');
        $('.control-label').removeClass('d-none');
    }
});
$('#find_a_doctor_btn').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#home-banner-section").offset().top - 100
    }, 1000);
});

function resetLoginForm() {
    $('#check_mobile_number').val('');
    $('#check_mobile_number').focus();
    if ($('#response_message').hasClass('text-danger')) {
        $('#response_message').html('').removeClass('text-danger');
    }
    $('.otp').val('');
    $('.modal-content').removeClass('otp-modal-content');
    $('.login-steps, .lds-ring, .someoneelse, .add-relative').hide();
    $('.pass-eye').removeClass('active');
    $('#login_with_password').prop('type', 'password');
    $('#log-card-1').show();
}

function countDownTimer() {
    $('.otp').val('');
    timer = 60;
    if (null != timeInterval) {
        clearInterval(timeInterval);
    }
    $('#resend_verification_code').hide();
    $('#resend_verification_code_timer').html('Resend verification code in 0:' + timer).show();
    timeInterval = setInterval(function() {
        if (timer < 0) timer = 0;
        if (!--timer) {
            clearInterval(timeInterval);
            $('#resend_verification_code_timer').hide();
            $('#resend_verification_code').show();
        } else {
            $('#resend_verification_code').hide();
            $('#resend_verification_code_timer').html('Resend verification code in 0:' + timer).show();
        }
    }, 1000);
}

function checkMobileNumberAjax(data, success) {
    if (timer > 0 && 'inline' == $('#resend_verification_code').css('display')) {
        console.log('Sorry you cannot resend verification code request until ' + timer + ' seconds passed.');
    } else {
        $('#check_mobile_number_loader').css('display', 'inline-block');
        $.ajax({
            url: base_url + 'user/check_phone_number',
            type: 'post',
            data: data,
            dataType: 'json',
            success: success,
            complete: function() {
                $('#check_mobile_number_loader').hide();
            }
        });
    }
}

function checkMobileNumber() {
    const mobile_number = $('#check_mobile_number').val();
    if (mobile_number !== '') {
        $('#response_message').html('').removeClass('text-danger');
        checkMobileNumberAjax({
            mobile_number: mobile_number
        }, function(response) {
            if (response.status == true) {
                if (response.otp_sent) {
                    countDownTimer();
                    $('.login-steps').hide();
                    $('#verification_code_1').focus();
                    $('.modal-content').addClass('otp-modal-content');
                    $('#log-card-2').show();
                    $('#verify_mobile_number').val(mobile_number);
                    $('#response_otp_sent').html('<small>' + response.message + '</small>');
                    $('.mobile-number span').text(mobile_number);
                } else {
                    $('.login-steps').hide();
                    $('#login_with_password').focus();
                    $('#password_mobile_number').val(mobile_number);
                    $('#log-card-3').show();
                }
            } else {
                $('#response_message').html('<small>' + response.message + '</small>').addClass('text-danger');
            }
        });
    } else {
        $('#response_message').html('<small>Please provide mobile number</small>').addClass('text-danger');
    }
}

function verifyMobileNumber() {
    const mobile_number = $('#verify_mobile_number').val();
    let otp = $('#verification_code_1').val();
    otp += $('#verification_code_2').val();
    otp += $('#verification_code_3').val();
    otp += $('#verification_code_4').val();
    otp += $('#verification_code_5').val();
    otp += $('#verification_code_6').val();
    if (mobile_number !== '' && otp.length == 6) {
        $('#verify_and_login_loader').css('display', 'inline-block');
        $.ajax({
            url: base_url + 'user/verify_phone_number',
            type: 'post',
            data: {
                mobile_number: mobile_number,
                otp: otp
            },
            dataType: 'json',
            success: function(response) {
                if (response.status == true) {
                    $('.modal-content').removeClass('otp-modal-content');
                    if ('undefined' != typeof response.data) {
                        const userdata = response.data;
                        let user_name = userdata.user_nicename || 'User';
                        let user_url = userdata.user_url;
                        is_user_logged_in = 1;
                        $('#member_area_link').prop('href', base_url + 'member/' + user_url);
                        $('#logged_in_user_navbar #dLabel.user-name').html(user_name + ' <span class="caret"></span>');
                    }
                    $('#modal-login').modal('hide');
                    $('#logged_in_user_navbar').show();
                    $('#not_logged_in_user_navbar').hide();
                } else {
                    $('#response_message').html('<small>' + response.message + '</small>').addClass('text-danger');
                }
            },
            complete: function() {
                $('#verify_and_login_loader').hide();
            }
        });
    } else {
        $('#response_message').html('<small>Please provide 6 digit OTP</small>').addClass('text-danger');
    }
}

function getCodeBoxElement(index) {
    return document.getElementById('verification_code_' + index);
}

function onKeyUpEvent(index, event) {
    const eventCode = event.which || event.keyCode;
    if (getCodeBoxElement(index).value.length === 1) {
        if (index !== 6) {
            getCodeBoxElement(index + 1).focus();
        } else {
            if (eventCode == 13) {
                event.preventDefault();
                verifyMobileNumber();
            }
        }
    }
    if (eventCode === 8 && index !== 1) {
        getCodeBoxElement(index - 1).focus();
    }
}

function onFocusEvent(index) {
    for (let item = 1; item < index; item++) {
        const currentElement = getCodeBoxElement(item);
        if (!currentElement.value) {
            currentElement.focus();
            break;
        }
    }
}

function loginWithPassword() {
    $('#response_message').html('').removeClass('text-danger');
    const mobile_number = $('#password_mobile_number').val();
    const password = $('#login_with_password').val();
    if ('' != mobile_number && '' != password) {
        $('#login_loader').css('display', 'inline-block');
        $.ajax({
            url: base_url + 'user/login_with_password',
            type: 'post',
            data: {
                mobile_number: mobile_number,
                password: password
            },
            dataType: 'json',
            success: function(response) {
                if (true == response.status) {
                    if ('undefined' != typeof response.data) {
                        const userdata = response.data;
                        let user_name = userdata.user_nicename || 'User';
                        let user_url = userdata.user_url;
                        $('#member_area_link').prop('href', base_url + 'member/' + user_url);
                        $('#logged_in_user_navbar #dLabel.user-name').html(user_name + ' <span class="caret"></span>');
                    }
                    $('#modal-login').modal('hide');
                    $('#logged_in_user_navbar').show();
                    $('#not_logged_in_user_navbar').hide();
                } else {
                    $('#response_message').html('<small>' + response.message + '</small>').addClass('text-danger');
                }
            },
            complete: function() {
                $('#login_loader').hide();
            }
        });
    } else {
        $('#response_message').html('<small>Please provide mobile number and password</small>').addClass('text-danger');
    }
}

function forgotPassword() {
    $('#response_message').html('').removeClass('text-danger');
    const mobile_number = $('#password_mobile_number').val();
    if ('' != mobile_number) {
        const data = {
            mobile_number: mobile_number,
            forgot_password: 'true'
        };
        checkMobileNumberAjax(data, function(response) {
            if (true == response.status) {
                $('.login-steps').hide();
                if (response.otp_sent) {
                    countDownTimer();
                    $('.modal-content').addClass('otp-modal-content');
                    $('#log-card-2').show();
                    $('#verification_code_1').focus();
                    $('#verify_mobile_number').val(mobile_number);
                    $('#response_otp_sent').html('<small>' + response.message + '</small>');
                    $('.mobile-number span').text(mobile_number);
                }
            } else {
                $('#response_message').html('<small>' + response.message + '</small>').addClass('text-danger');
            }
        });
    } else {
        $('#response_message').html('<small>Please provide mobile number</small>').addClass('text-danger');
    }
}
$(document).on('click', '#change_mobile_number', function() {
    resetLoginForm();
});
$(document).on('click', '#check_mobile_number_btn', function(e) {
    e.preventDefault();
    checkMobileNumber();
});
$(document).on('keydown', '#check_mobile_number', function(e) {
    if (e.keyCode == 13) {
        $('#login_with_password, #verification_code_1').focus();
        e.preventDefault();
        checkMobileNumber();
    }
});
$(document).on('click', '#resend_verification_code, #resend_verification_code_2', function() {
    const mobile_number = $('#verify_mobile_number').val();
    const data = {
        mobile_number: mobile_number,
        forgot_password: 'true'
    };
    checkMobileNumberAjax(data, function(response) {
        if (response.status == true) {
            if (response.otp_sent) {
                countDownTimer();
            }
        } else {
            $('#response_message').html('<small>' + response.message + '</small>').addClass('text-danger');
        }
    });
});
$(document).on('click', '#verify_and_login', function(e) {
    e.preventDefault();
    verifyMobileNumber();
});
$(document).on('shown.bs.modal', '#modal-login', resetLoginForm);
$(document).on('hidden.bs.modal', '#modal-login', resetLoginForm);
$(document).on('click', '#forgot_password_btn', forgotPassword);
$(document).on('click', '#login_btn', loginWithPassword);
$(document).on('keydown', '#login_with_password', function(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        loginWithPassword();
    }
});
$(document).on('hidden.bs.modal', '#demo-modal', function() {
    $('#demoRequestForm').trigger('reset');
    $('#user_phone').removeClass('invalid');
    $('#demoRequestForm .control-label').addClass('d-none');
    $('.message-box').removeClass('text-danger text-success').addClass('d-none');
    $("#demoRequestForm").show();
});
$(document).on('hidden.bs.modal', '#login-modal', function() {
    $('#login_form').trigger('reset');
    $('#forget-password-form').trigger('reset');
    $('.login-clear-message').html('').removeClass('text-danger text-success');
    $('#login_form').show();
    $('#forget-password-form').hide();
});
$('#forgot-password').click(function(e) {
    e.preventDefault();
    $('#login_form').hide();
    $('#forget-password-form').show();
});
$('#remember-password').click(function(e) {
    e.preventDefault();
    $('#login_form').show();
    $('#forget-password-form').hide();
});
$("#login_form").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        console.log("here");
    }
});
$('#forget-password-form').submit(function(event) {
    event.preventDefault();
    if (!validateForgotPassword()) {
        return false;
    }
    $("#forget-password-msg").html('').removeClass('text-success text-danger');
    var formData = {
        'email': $('#forget_email').val()
    };
    var btnLoading = $(this).find('.js-btn-control');
    $.ajax({
        type: 'POST',
        url: base_url + 'forgetpassword',
        data: formData,
        dataType: 'json',
        beforeSend: function() {
            btnLoading.attr('disabled', 'disabled');
            btnLoading.addClass('loading');
        },
        success: function(response) {
            console.log("response: ", response);
            var obj = eval(response);
            $("#forget-password-msg").removeClass('text-success text-danger');
            if (obj) {
                if (obj.error == 0) {
                    if (obj.is_sms_sent == 1) {
                        $("#forget-password-msg").html("Please check your sms for instructions regarding a new password.").addClass('text-success');
                    } else {
                        $("#forget-password-msg").html("Please check your email for instructions regarding setting a new password.").addClass('text-success');
                    }
                } else {
                    $("#forget-password-msg").html("We could not reset the password at the moment, Please check email or mobile number and try agin later.").addClass('text-danger');
                }
            }
        },
        complete: function() {
            btnLoading.removeAttr('disabled');
            btnLoading.removeClass('loading');
        },
        error: function(xhr, ajaxOptions, thrownError) {
            $("#forget-password-msg").html("We could not reset the password at the moment, Please check email or mobile number and try agin later.").addClass('text-danger');
        }
    });
});
$("#dont-have-account").click(function() {
    $("#login-modal").modal('toggle');
});
$('#signup-submit-btn').on('click', function(e) {
    e.preventDefault();
    if (validatesignup()) {
        $('#signup_form').submit();
    }
});

function validate_name(name) {
    filter = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z\/]*)*$/;
    return !(filter.test(name)) ? false : true;
}

function valid_a_email(email) {
    filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !(filter.test(email)) ? false : true;
}

function phonenumber_signup(phone) {
    filter = /^[\d\s]+$/;
    return !(filter.test(phone)) ? false : true;
}

function validatesignup() {
    var flg = 0;
    if ($.trim($('#signup_name').val()) == "") {
        $("#signup_name").addClass('invalid');
        $("#signup_error_name").html('Please enter Name');
        if (flg == 0) flg += 1;
    } else {
        var name = $('#signup_name').val();
        if (!validate_name($.trim(name)) || name.length > 30) {
            $("#signup_name").addClass('invalid');
            $("#signup_error_name").html('Invalid name enter only characters and upto 30 characters');
            if (flg == 0) flg += 1;
        } else {
            $("#signup_name").removeClass('invalid');
            $("#signup_error_name").html('');
        }
    }
    var phone_number = $.trim($('#signup_phone').val());
    if (phone_number == "") {
        $("#signup_phone").addClass('invalid');
        $("#signup_error_phone").html('Please enter phone number');
        if (flg == 0) flg += 1;
    } else {
        if (!phonenumber_signup(phone_number) || phone_number.length < 11 || phone_number.length > 14) {
            $("#signup_phone").addClass('invalid');
            $("#signup_error_phone").html('Please enter a valid number.');
            if (flg == 0) flg += 1;
        } else {
            $("#signup_error_phone").html('');
            $("#signup_phone").removeClass('invalid');
        }
    }
    var signup_email = $.trim($('#signup_email').val());
    if (signup_email == "") {
        $("#signup_email").addClass('invalid');
        $("#signup_error_email").html('Email is required');
        if (flg == 0) flg += 1;
    } else {
        if (!valid_a_email(signup_email)) {
            $("#signup_email").addClass('invalid');
            $("#signup_error_email").html('Invalid email.');
            if (flg == 0) flg += 1;
        } else {
            $("#signup_error_email").html('');
            $("#signup_email").removeClass('invalid');
        }
    }
    var pass = $.trim($('#signup_password').val());
    if (pass == "" || pass.length < 7) {
        $("#signup_password").addClass('invalid');
        $("#signup_password_error").html('Please enter password with at least 7 characters.');
        if (flg == 0) flg += 1;
    } else {
        $("#signup_password_error").html('');
        $("#signup_password").removeClass('invalid');
    }
    return flg == 0;
}

function validateForgotPassword() {
    var flg = 0;
    var numberRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
    if (numberRegex.test($('#forget_email').val())) {
        if ($('#forget_email').val().length < 11 || $('#forget_email').val().length > 14) {
            $("#forget_email").addClass('invalid');
            $("#forgot_error_email").html('Invalid mobile number').addClass('text-danger');
            if (flg == 0) {
                flg += 1;
            }
        }
    } else {
        if ($.trim($('#forget_email').val()) == "") {
            $("#forget_email").addClass('invalid');
            $("#forgot_error_email").html('Please enter email or phone number').addClass('text-danger');
            if (flg == 0) {
                flg += 1;
            }
        } else {
            if (!valid_a_email($.trim($('#forget_email').val()))) {
                $("#forget_email").addClass('invalid');
                $("#forgot_error_email").html('Invalid email address').addClass('text-danger');
                if (flg == 0) {
                    flg += 1;
                }
            } else {
                $("#forget_email").removeClass('invalid');
                $("#forgot_error_email").html('').removeClass('text-danger');
            }
        }
    }
    if (flg == 0) {
        $("#forgot_error_email").html('').removeClass('text-danger');
        return true;
    } else {
        return false;
    }
}

function validatelogin() {
    var flg = 0;
    var btnLogin = $('.js-btn-login');
    btnLogin.attr('disabled', 'disabled');
    btnLogin.addClass('loading');
    var numberRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
    if (numberRegex.test($('#user_email').val())) {
        if ($('#user_email').val().length < 11 || $('#user_email').val().length > 14) {
            $("#user_email").addClass('invalid');
            $("#login_error_email").html('Invalid mobile number').addClass('text-danger');
            if (flg == 0) {
                flg += 1;
            }
        }
    } else {
        if ($.trim($('#user_email').val()) == "") {
            $("#user_email").addClass('invalid');
            $("#login_error_email").html('Please enter email').addClass('text-danger');
            if (flg == 0) {
                flg += 1;
            }
        } else {
            if (!valid_a_email($.trim($('#user_email').val()))) {
                $("#user_email").addClass('invalid');
                $("#login_error_email").html('Invalid email address').addClass('text-danger');
                if (flg == 0) {
                    flg += 1;
                }
            } else {
                $("#user_email").removeClass('invalid');
                $("#login_error_email").html('').removeClass('text-danger');
            }
        }
    }
    if ($.trim($('#login_password').val()) == "") {
        $("#login_password").addClass('invalid');
        $("#login_password_error").html('Please enter password').addClass('text-danger');
        if (flg == 0) {
            flg += 1;
        }
    } else {
        $("#login_password_error").html('').removeClass('text-danger');
        $("#login_password").removeClass('invalid');
    }
    console.log('flag status: ', flg);
    if (flg == 0) {
        return true;
    } else {
        btnLogin.removeAttr("disabled");
        btnLogin.removeClass('loading');
        return false;
    }
}
$(document).on('click', '.pass-eye', function() {
    var pwd = $(this).parent().parent().find('[name="password"]');
    $(this).toggleClass('active');
    if ($(pwd).prop('type') == 'text') {
        $(pwd).prop('type', 'password');
    } else {
        $(pwd).prop('type', 'text');
    }
});