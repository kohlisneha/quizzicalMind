const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

// const signupForm = document.getElementById("signup");

// signupForm.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   const fullName = document.getElementById("username").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   const response = await fetch("http://localhost:5157/user/register", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ fullName, email, password }),
//   });

//   if (response.ok) {
//     const data = await response.json();
//     if (data.message === "Success") {
//       // Redirect to homepage or display success message
//       window.location.href = "/"; // Redirect to homepage
//     } else {
//       // Handle any error messages from the backend
//       alert("Signup failed!");
//     }
//   } else {
//     // Handle any network errors
//     alert("Network error! Please try again.");
//   }
// });
