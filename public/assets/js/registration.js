var $ = function (id){

	return document.getElementById(id);

}

var socket = io('http://208.68.37.238:3090');

socket.on('success', function(success){
	    
	if(success){

        alert("Registration successful.")
		window.location.href = "../index.html";

	}else{

		alert("An error occurred. Please try again later or contact us at hackprut@gmail.com.");

	}
	

});


/*******************************ON LOAD*******************************/

window.onload = function () {

    $("btnSubmit").onclick = function(){


        var firstName = $('usr_first_name').value;
        var lastName = $('last_name').value;
        var email = $('email').value;
        var age = $('usr_age').value;
        var university = $('usr_university').value;
        var tshirtSize = $('usr_size').value;
        var city = $('usr_city').value;
        var academicYear = $('usr_academicyr').value;
        var firstHackathon = $('usr_ht').value;
        var resume = $('usr_resume').value;

        var flag = true;


        if(firstName != ""){

            if(lastName != ""){

                if(email != ""){

                    if(age != ""){

                        if(city != ""){

                            socket.emit('hackathon-registration', firstName, lastName, age, tshirtSize, city, email, university, academicYear, firstHackathon, resume);
                            flag = false;

                        }

                    }

                }

            }

        }


        if(flag){

            alert("Please fill all the information.")

        }

    }

}