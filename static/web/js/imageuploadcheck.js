
$(document).ready(function () {
    $.ajax({
        url: "http://127.0.0.1:8000/api/user/properties/",
        type: 'GET',
        beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Token '+localStorage.getItem('token'));},
        success: function (response) {
            const obj = JSON.parse(JSON.stringify(response));
            if(obj.length>0){
            }
            else{
                "http://127.0.0.1:8000/profiler/"
            }
        },
        error: function (jqXHR) {
            if (jqXHR.status == 400) { 
            } else {
                window.location.href = "http://127.0.0.1:8000/"
            }
        }
    }); 

    $.ajax({
        url: "http://127.0.0.1:8000/api/user/Bproperties/",
        type: 'GET',
        beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Token '+localStorage.getItem('token'));},
        success: function (response) {
            const obj = JSON.parse(JSON.stringify(response));
            if(obj.length>0){
            }
            else{
                window.location.href = "http://127.0.0.1:8000/profilerB/"
            }
        },
        error: function (jqXHR) {
            if (jqXHR.status == 400) { 
            } else {
                window.location.href = "http://127.0.0.1:8000/"
            }
        }
    }); 
    $.ajax({
        url: "http://127.0.0.1:8000/api/user/header_load/",
        type: 'GET',
        beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Token '+localStorage.getItem('token'));},
        success: function (response) {
            const obj = JSON.parse(JSON.stringify(response));
            if(obj.length>0){
                window.location.href = "http://127.0.0.1:8000/home/"
            }
            else{
                window.location.href = "http://127.0.0.1:8000/profilerB/"
            }
        },
        error: function (jqXHR) {
            if (jqXHR.status == 400) { 
            } else {
            }
        }
    }); 




});