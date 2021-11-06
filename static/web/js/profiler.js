

$(document).ready(function () {
    $("form[name='profiler']").validate({ // initialize the plugin
        rules: {
            profileCreated: {
                required: true,
            },
            name: {
                required: true,
            },
            gender: {
                required: true,
            },
            community: {
                required: true,
            },
            moblie: {
                required: true,
            },
            preferredProfile: {
                required: true,
            },
            dateOfBirth: {
                required: true,
            },
            relegion: {
                required: true,
            },
            nationality: {
                required: true,
            },
            height: {
                required: true,
            },
            weight: {
                required: true,
            },
            martialStatus: {
                required: true,
            },
            complexion: {
                required: true,
            },
            ethnicGroup: {
                required: true,
            },
            complexion: {
                required: true,
            },
            bodyType: {
                required: true,
            },
            physicalStatus: {
                required: true,
            },
            motherTongue: {
                required:true,
            },
            fatherOccupation: {
                required:true,
            },
            motherOccupation: {
                required:true,
            },
            brothers: {
                required:true,
            },
            sisters: {
                required:true,
            },
            financialStatus: {
                required:true,
            },
            smoking: {
                required:true,
            },
            drinking:{
                required:true,
            }
           
        },
        messages:{
           
            nationality:"This Field Is Required",
            

        },
            
    
        submitHandler:function(){
            event.preventDefault();
            var csrf_token1 = $('[name="csrfmiddlewaretoken"]').val();
            var profileCreated = $('#profileCreated').val();
            var name = $('#name').val();
            var gender = $('#gender').val();
            var community = $('#community').val();
            var moblie = $('#moblie').val();
            var preferredProfile = $('#preferredProfile').val();
            var dateOfBirth = $('#dateOfBirth').val();
            var relegion = $('#relegion').val();
            var nationality = $('#nationality').val();
            var height = $('#height').val();
            var weight = $('#weight').val();
            var martialStatus = $('#martialStatus').val();
            var complexion = $('#complexion').val();
            var ethnicGroup = $('#ethnicGroup').val();
            var bodyType = $('#bodyType').val();
            var physicalStatus = $('#physicalStatus').val();
            var motherTongue = $('#motherTongue').val();
            var fatherOccupation = $('#fatherOccupation').val();
            var motherOccupation = $('#motherOccupation').val();
            var brothers = $('#brothers').val();
            var sisters = $('#sisters').val();
            var financialStatus = $('#financialStatus').val();
            var smoking = $('#smoking').val();
            var drinking = $('#drinking').val();
            data = {
                "profileCreated": profileCreated,
                "name": name,
                "gender": gender,
                "community": community,
                "moblie": moblie,
                "preferredProfile": preferredProfile,
                "dateOfBirth": dateOfBirth,
                "relegion": relegion,
                "nationality": nationality,
                "height": height,
                "weight": weight,
                "martialStatus": martialStatus,
                "complexion": complexion,
                "ethnicGroup": ethnicGroup,
                "bodyType": bodyType,
                "physicalStatus": physicalStatus,
                "motherTongue": motherTongue,
                "fatherOccupation": fatherOccupation,
                "motherOccupation": motherOccupation,
                "brothers": brothers,
                "sisters": sisters,
                "financialStatus": financialStatus,
                "smoking": smoking,
                "drinking":drinking,
            }
            $.ajax({
                url: "http://127.0.0.1:8000/api/user/properties/",
                type: 'POST',
                dataType: "JSON",
                data: data,
                            
                beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Token '+localStorage.getItem('token'));},
                success: function (response) {
                    // var responseText = jQuery.parseJSON(response);
                   
                    //sessionStorage.setItem("token", response['token'])
                    window.location.href = "http://127.0.0.1:8000/profilerB/"
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





