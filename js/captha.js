var captcha= new Array ();
function validateRecaptcha(){
    var recaptcha= document.getElementById("recaptcha").value;;
    var validRecaptcha=0;
    for(var z=0; z<5; z++){
        if(recaptcha.charAt(z)!= captcha[z]){
            validRecaptcha++;
        }
    }
    if (recaptcha == ""){
        document.getElementById('errCaptcha').innerHTML = 'Captcha must be filled';
    } else if (validRecaptcha>0 || recaptcha.length>5){
        document.getElementById('errCaptcha').innerHTML = 'Captcha error...';
    } else{
        document.getElementById('errCaptcha').innerHTML = 'Please wait...';
	setTimeout(function () {
	window.location.href = 'javascript:googleadss()' ;
	}, 3000);
    }
}
function createCaptcha(){
    for(q=0; q<5 ; q++){
        if(q %2 ==0){
            captcha[q] = String.fromCharCode(Math.floor((Math.random()*26)+65));
        }else{      
            captcha[q] = Math.floor((Math.random()*10)+0);
        }
    }
    thecaptcha=captcha.join("");
    document.getElementById('captcha').innerHTML=
     "<span class='captcha'> " +thecaptcha+ " </span>"; 
}
