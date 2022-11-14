var MD = document.getElementById("login");
var MDY = document.getElementById("register");
var MDYZ = document.getElementById("btn");

function register() {
    MD.style.left = "-400px";
    MDY.style.left = "50px";
    MDYZ.style.left = "110px";
}


function login() {
    MD.style.left = "50px";
    MDY.style.left = "450px";
    MDYZ.style.left = "0";
}

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    const user = {
        username: "EC7340",
        password: "Mr.Pricipality", 
    };

    if (username == user.username && password == user.password) {
        alert ("Successful Login");
        return false;
    } else{
        alert("Incorrect Username of Password");
        return false;
    }
}