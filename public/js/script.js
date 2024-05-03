// const { post } = require("../../Routes/RegisterRoute");

function show() {
  document.getElementById("menu-bar").style.cssText = "left:0%!important;";
  document.getElementById("click").className = "fa fa-times icon";
  document.getElementById("click").setAttribute("onclick", "hide()");
}

function hide() {
  document.getElementById("menu-bar").style.cssText = "left:-100%!important;";
  document.getElementById("click").className = "fa fa-bars icon";
  document.getElementById("click").setAttribute("onclick", "show()");
}

const pass = document.getElementById("password");
const fullName = document.getElementById("fullName");

const register = document.getElementById("register");
const email = document.getElementById("email");

async function signIn(email, password, fullName) {
  const response = await fetch("/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fullName,
      email,
      password,
    }),
  });
  if (!response.ok) {
    alert("user already exists please login ");
  } else {
    alert("sign in sucessful you can login now");
    window.location.href = "/";
  }
  const data = await response.json();
  console.log(data);
}

// Creating login functionality
