function Change_color (x){
    x.style.backgroundColor  ="aliceblue";
}

function OG_color (x){
    x.style.backgroundColor= "white";
}

function Login_button (){
    var username = document.getElementById ("Username").value;
    var password = document.getElementById ("Password").value;

    if (username !== "" && password ==""){
        document.getElementById("Forgot_password").innerHTML = "Please enter your password";
        console.log ("Login error");
    } else if (username=="" && password !==""){
        document.getElementById("Forgot_username").innerHTML ="Please enter your username";
        console.log ("Login error");
    } else if (username =="" && password==""){
        document.getElementById("FORGOT").innerHTML ="Please enter your username and password";
        console.log ("Login error");
    } else {
        document.getElementById ("FORGOT").innerHTML="";
    }

}

