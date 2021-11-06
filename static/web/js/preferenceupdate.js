


$(document).ready(function () {
    $.ajax({
        url: "http://127.0.0.1:8000/api/user/GetUserPreferences/",
        type: 'GET',
        beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Token '+localStorage.getItem('token'));},
        success: function (response) {
            const obj = JSON.parse(JSON.stringify(response));
            $('#community').val(obj[0].community)
            $('#ageFrom').val(obj[0].ageFrom)
            $('#ageTo').val(obj[0].ageTo)
            $('#martialStatus').val(obj[0].martialStatus)
            $('#bodyType').val(obj[0].bodyType)
            $('#heightFrom').val(obj[0].heightFrom)
            $('#heightTo').val(obj[0].heightTo)
            $('#weightFrom').val(obj[0].weightFrom)
            $('#weightTo').val(obj[0].weightTo)
            $('#smoking').val(obj[0].smoking)
            $('#drinking').val(obj[0].drinking)
            $('#complexion').val(obj[0].complexion)
            $('#profession').val(obj[0].profession)
        },
        error: function (jqXHR) {
            if (jqXHR.status == 404) { 
                var responseText = jQuery.parseJSON(jqXHR.responseText);
                window.location.href = "http://127.0.0.1:8000/"
            } else {
                window.location.href = "http://127.0.0.1:8000/"
                // $('#username').html("<a href='http://127.0.0.1:8000/signup/' class='get-started-btnn'>Sign Up</a>");
            }
        }
    }); 
    $("form[name='modify']").validate({ // initialize the plugin
        rules: {
            ageFrom: {
                digits: true,
            },
            ageTo: {
                digits: true,
            },
            heightFrom: {
                digits: true,
            },
            heightTo: {
                digits: true,
            },
            weightFrom: {
                digits: true,
            },
            weightTo: {
                digits: true,
            },
            
        },
        messages:{
            ageFrom:"Enter a number ",
            ageTo:"Enter a number ",
            heightFrom:"Enter a number ",
            heightTo:"Enter a number ",
            weightFrom:"Enter a number ",
            weightTo:"Enter a number ",
        },
            
    
        submitHandler:function(){
            event.preventDefault();
            var csrf_token1 = $('[name="csrfmiddlewaretoken"]').val();
            var community = $('#community').val();
            var ageFrom = $('#ageFrom').val();
            var ageTo = $('#ageTo').val();
            var martialStatus = $('#martialStatus').val();
            var bodyType = $('#bodyType').val();
            var heightFrom = $('#heightFrom').val();
            var heightTo = $('#heightTo').val();
            var weightFrom = $('#weightFrom').val();
            var weightTo = $('#weightTo').val();
            var smoking = $('#smoking').val();
            var drinking = $('#drinking').val();
            var complexion = $('#complexion').val();
            var profession = $('#profession').val();
            data = {
                "community": community,
                "profession": profession,
                "ageFrom": ageFrom,
                "ageTo": ageTo,
                "martialStatus": martialStatus,
                "bodyType": bodyType,
                "heightFrom": heightFrom,
                "heightTo": heightTo,
                "weightFrom": weightFrom,
                "weightTo": weightTo,
                "smoking": smoking,
                "drinking": drinking,
                "complexion": complexion,
            }
            $.ajax({
                url: "http://127.0.0.1:8000/api/user/UpadteUserPreferences/",
                type: 'POST',
                dataType: "JSON",
                data: data,
                            
                beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Token '+localStorage.getItem('token'));},
                success: function (response) {
                    // var responseText = jQuery.parseJSON(response);   
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





