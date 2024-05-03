const login = document.getElementById("login");

login.addEventListener("click", login2);

const loginEmail = document.getElementById("loginEmail");
const h1 = document.getElementById("h1");

const loginPass = document.getElementById("loginPass");
function login2() {
  if (loginEmail.value === "" || loginPass.value === "") {
    alert("empty fields");
  }
  console.log(loginEmail.value);
  Login(loginEmail.value, loginPass.value);
}
async function Login(email, password) {
  const user = await fetch("/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  if (!user.ok) {
    alert(
      "Invalid login please check your email or password and register if you havent"
    );
  } else {
    const data = await user.json();
    alert("sucessful login");
    window.location.href = "/";
  }
}
