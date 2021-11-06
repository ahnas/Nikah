$(document).ready(function () {
    
    $("form[name='login']").validate({ // initialize the plugin
        rules: {
            email: {
                required: true,
                email: true,
            },
            password1: {
                required: true,
                minlength: 6,
            },
        },
        messages:{
            email:{
                required:"Email Is Required",
                email:"Must be an email",
            },
            password1:{
                required:"Enter the Password",
                minlength:"Minimum 6 Charecters",
            },
        },
        submitHandler:function(){
            event.preventDefault();
            var csrf_token1 = $('[name="csrfmiddlewaretoken"]').val();
            var email = $('#email').val();
            var password1 = $('#password1').val();
            


            data = {'email':email,'password':password1,csrfmiddlewaretoken:csrf_token1}
            
            $.ajax({
                url: "http://127.0.0.1:8000/api/user/token/",
                type: 'POST',
                dataType: "JSON",
                data: data,
                // beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Token 6660edb56e1809238b3239f9bb8e3c1961e11c6e');},
                success: function (response) {
                    // var responseText = jQuery.parseJSON(response);
                    localStorage.setItem("token", response['token'])
                    //sessionStorage.setItem("token", response['token'])
                    window.location.href = "http://127.0.0.1:8000/home/"
                },
                error: function (jqXHR) {
                    if (jqXHR.status == 400) {
                        var responseText = jQuery.parseJSON(jqXHR.responseText);
                        $('#emailwarning').html(responseText['non_field_errors']);
                    } else {
                        $('#emailwarning').html("Unnexpected Error Occured ");
                    }
                }
            }); 
        }
    });

});

$("#email").keyup(function(){
    $('#emailwarning').html('');
});

$("#password1").keyup(function(){
    $('#emailwarning').html('');
});




