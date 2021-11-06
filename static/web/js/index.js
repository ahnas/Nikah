function logout(){
    localStorage.removeItem('token');
    window.location.href = "http://127.0.0.1:8000/";
}

$(document).ready(function () {
    $.ajax({
        url: "http://127.0.0.1:8000/api/user/test_auth/",
        type: 'GET',
        beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Token '+localStorage.getItem('token'));},
        success: function (response) {
            // $('#username').html("<a href='#' class='text-white'>"+myArr[1]+"</a>");
            $('#findsoulmate').html("<a href='home/' ><button class='btn btnr'>Find your Soulmate</button></a>");
            $('#username').html("<a onclick='logout()' href='#' style='background-color: #3acf6e; font-weight: 600;' class='get-started-btnn'>logout</a>");
            window.location='http://127.0.0.1:8000/home/'
            // $('#usernamefield1').html(myArr[1]+"&nbsp&nbsp&nbsp<img style='border-radius: 50%;width:30px;height:30px;'src='"+myArr[0] +"' alt='SDGDSA'>");
            //sessionStorage.setItem("token", response['token'])
        },
        error: function (jqXHR) {
            if (jqXHR.status == 400) { 
                var responseText = jQuery.parseJSON(jqXHR.responseText);
                $('#emailwarning').html(responseText['non_field_errors']);
            } else {
                $('#findsoulmate').html("<a href='login/'><button class='btn btnr'>Login</button></a></div>");
            }
        }
    });

});