
$(document).ready(function () {
    $.ajax({
        url: "http://127.0.0.1:8000/api/user/LikedYouProfile/",
        type: 'GET',
        beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Token '+localStorage.getItem('token'));},
        success: function (response) {
            const obj = JSON.parse(JSON.stringify(response));
            for(let i = 0; i < obj.length && i<=200; i++){
                var age= new Date().getFullYear()-new Date(obj[i]['profile'].dateOfBirth).getFullYear();
                $('#memberList').append("<div class='col-lg-4  col-md-6 col-sm-12 col-12 p-2' id='"+obj[i]['user']+"'>\
                <div class='pager-coll gext'><div class='row justify-content-center'>\
                <div class='col-lg-5 col-md-5 col-sm-12 pr-0'>\
                <img src='"+obj[i].image+"' alt='' class='homeimages' onclick='profileview("+obj[i].id+")'>\
                <div class='d-flex mobi'><p class='sta'>\
                <i class='icofont-ui-text-chat'></i>\
                </p><p class='sta'><i class='icofont-star'></i>\
                </p></div></div><div class='col-lg-7 col-md-7\ col-sm-5 col-6 pro-detail'>\
                <h4>"+obj[i].nmId+"<span class='float-right' onclick='likeProfile("+obj[i]['user']+")'><i class='icofont-like'></i></span></h4><p>Age  <span class='sp1 ml-4'>"+age+"</span> \
                </p> <p>Status  <span class='sp2'>"+obj[i]['profile'].martialStatus+"</span></p>\
                <p ><span><i class='icofont-users-alt-3 mr-2'></span></i>\
                "+obj[i]['profile'].relegion+"</p><p><span><i class='icofont-web mr-2'></span></i>\
                "+obj[i]['education'].highestEducation+"</p><p><span><i class='icofont-bag mr-2'></span></i>\
                "+obj[i]['education'].profession+"</p><p><span><i class='icofont-location-pin mr-2'></span></i>"+ obj[i]['education'].nativeCity+"</p>\
                </div></div><div class='d-none three justify-content-center'><p class='sta'>\
                <i class='icofont-ui-text-chat'></i></p><p class='sta'><i class='icofont-star'>\
                </i></p><p class='sta'><i class='icofont-heart'></i></p></div></div></div>");
                }
           
            // $('#usernamefield1').html(myArr[1]+"&nbsp&nbsp&nbsp<img style='border-radius: 50%;width:30px;height:30px;'src='"+myArr[0] +"' alt='SDGDSA'>");
            //sessionStorage.setItem("token", response['token'])
        },
        error: function (jqXHR) {
            if (jqXHR.status == 404) { 
                window.location.href = "http://127.0.0.1:8000/pending"
                var responseText = jQuery.parseJSON(jqXHR.responseText);
            } else {
                // $('#username').html("<a href='http://127.0.0.1:8000/signup/' class='get-started-btnn'>Sign Up</a>");
            }
        }
    }); 




});