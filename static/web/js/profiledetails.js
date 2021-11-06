$(document).ready(function () {
    id=$('#profileID').val()
    $.ajax({
        url: "http://127.0.0.1:8000/api/user/UaerpropertiesLikedandAndNonLiked/"+id,
        type: 'GET',
        beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Token '+localStorage.getItem('token'));},
        success: function (response) {
            const obj = JSON.parse(JSON.stringify(response));
            var age=new Date().getFullYear()-new Date(obj['profile'].dateOfBirth).getFullYear();
            if((new Date(obj['profile'].dateOfBirth).getMonth())>new Date().getMonth()){
                age=age-1;
            }
            $('#profileimage').attr('src',obj['image'])
            $('#ProfileName').html(obj['profile'].name+"<span class='float-right disp'>Like this profile? <button class='btnn ml-3'><i class='icofont-ui-love mr-2'></i>Like</button></span>")
            $('#dateOfBirth').html(age);
            $("#dateOfBirthpc").html(age);
            $("#martialStatuspc").html(obj['profile'].martialStatus);
            $("#martialStatus").html(obj['profile'].martialStatus);
            $("#profileCreated").html(obj['profile'].profileCreated);
            $("#nativeCityPC").html(obj['education'].nativeCity);
            $("#nativeCity").html(obj['education'].nativeCity);
            $("#bodyType").html(obj['profile'].bodyType+" | "+obj['profile'].height+" cm | "+obj['profile'].weight+"Kg");
            $("#relegion").html(obj['profile'].relegion +" | "+obj['profile'].community);
            $("#highestEducation").html(obj['education'].highestEducation);
            $("#profession").html(obj['education'].profession);
            $("#motherTongue").html(obj['profile'].motherTongue);
            $("#ethnicGroup").html(obj['profile'].ethnicGroup);
            $("#eliteclass").html(obj['profile'].eliteclass);
            $("#smoking").html(obj['profile'].smoking);
            $("#fatherocupation").html(obj['profile'].fatherocupation);
            $("#motherocupation").html(obj['profile'].motherocupation);
            $("#performNamaz").append(obj['education'].performNamaz);
            $("#relegiousStatus").append(obj['education'].religiousness);
            $("#quran").append(obj['education'].readQuran);
            $("#madrassaEdu").append(obj['education'].madrassaEducation);
            $("#islamicsercices").append(obj['education'].attendIslamicServices);
            $("#primaryNumber").html(obj['education'].primaryNumber);
            $("#whatsapp").html("+91 "+obj['education'].primaryNumber);    
            $("#secondaryNumber").html(obj['education'].secondaryNumber);
            var str = obj['education'].houseName+","+obj['education'].locality+",<br>"+obj['education'].nativeCity+",<br>"+obj['education'].pincode;
            $("#nativeaddress").append(str);
            $("#currentAddress").append(str);
            $("#profileEmail").html(obj['user'].email);
            $("#describe").html(obj['education'].describe);
            $("#complexion").html(obj['profile'].complexion);
            $("#drinking").html(obj['profile'].drinking);
            var b=(parseInt(obj['profile'].brothers)>1) ? "s" : "";
            var s=(parseInt(obj['profile'].sisters)>1) ? "s" : "";
            $("#brothersister").html(obj['profile'].brothers + " Brother" +b+ " | "+obj['profile'].sisters +" Sister"+s);
        },
        error: function (jqXHR) {
            if (jqXHR.status == 404) { 
                var responseText = jQuery.parseJSON(jqXHR.responseText);
            } else {
                // $('#username').html("<a href='http://127.0.0.1:8000/signup/' class='get-started-btnn'>Sign Up</a>");
            }
        }
    }); 
    $.ajax({
        url: "http://127.0.0.1:8000/api/user/collectproperties/",
        type: 'GET',
        beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Token '+localStorage.getItem('token'));},
        success: function (response) {
            var n=3;
            const prof = JSON.parse(JSON.stringify(response));
            for(let i = 0; i < prof.length && i<n; i++){
                if(prof[i].id==id){
                    n++;
                continue;

                }
                var ages= new Date().getFullYear()-new Date(prof[i]['profile'].dateOfBirth).getFullYear();
            
                $('#similarProfiles').append(
            "<div class='col-lg-4 col-md-6 col-sm-12 col-12 p-2'>\
             <div class='pager-coll' onclick='profileview("+prof[i].id+")'>\
              <div class='row'>\
               <div class='col-lg-6 col-md-6 col-sm-6 col-6 pr-0 simig'>\
                <img src='"+prof[i].image+"' alt='' class='homeimages'>\
                 <div class='d-flex'> <p class='sta'><i class='icofont-ui-text-chat'></i></p> <p class='sta'><i class='icofont-star'></i></p> </div>\
                  </div> \
                  <div class='col-lg-6 col-md-6 col-sm-6 col-6 pro-detail floa pr-0'>\
                   <a class='like'><i class='icofont-ui-love'></i>Like</a> <h4>"+prof[i]['profile'].name+"</h4> <p>Age  <span class='sp1 ml-4'>"+ages+"</span> </p>\
                    <p>Status  <span class='sp2'>"+prof[i]['profile'].martialStatus+"</span></p> <p><span><i class='icofont-users-alt-3 mr-2'></span></i>"+prof[i]['profile'].relegion+"</p> \
                    <p><span><i class='icofont-web mr-2'></span></i>"+prof[i]['education'].highestEducation+"</p> <p><span><i class='icofont-bag mr-2'></span></i>"+prof[i]['education'].profession+"</p>\
                     <p><span><i class='icofont-location-pin mr-2'></i></span></i>"+ prof[i]['education'].nativeCity+"</p> </div> </div> </div> </div>")
            
        }
            // $('#username').html("<a href='#' class='text-white'>"+myArr[1]+"</a>");
            const obj = JSON.parse(JSON.stringify(response));

        },
        error: function (jqXHR) {
            if (jqXHR.status == 404) { 
                var responseText = jQuery.parseJSON(jqXHR.responseText);
            } else {
                // $('#username').html("<a href='http://127.0.0.1:8000/signup/' class='get-started-btnn'>Sign Up</a>");
            }
        }
    }); 




});