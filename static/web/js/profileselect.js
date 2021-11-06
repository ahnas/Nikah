function profileview(id){
    window.location.href = "http://127.0.0.1:8000/viewprofile/"+id;
}

function likeProfile(id){
    
    data = {'liked_by_user':id,'liked_user':id}
            
    $.ajax({
        url: "http://127.0.0.1:8000/api/user/likeprofile/",
        type: 'POST',
        dataType: "JSON",
        data: data,
        beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Token '+localStorage.getItem('token'));},
               
        // beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Token 6660edb56e1809238b3239f9bb8e3c1961e11c6e');},
        success: function (response) {
            $("#"+id).fadeOut();
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


function modify(id){
    window.location.href = "http://127.0.0.1:8000/modify/";
}