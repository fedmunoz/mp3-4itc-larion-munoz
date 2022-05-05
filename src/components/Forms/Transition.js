var loginBtn = document.getElementById("loginBtn");
var registerBtn = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

export function registerForm() {
    registerBtn.style.fontWeight = "700";
    loginBtn.style.fontWeight = "400";
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

export function loginForm() {
    loginBtn.style.fontWeight = "700";
    registerBtn.style.fontWeight = "400";
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}