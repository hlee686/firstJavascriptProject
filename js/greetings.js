const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  localStorage.setItem('username', username);
  paintGreeting(username);
}

function paintGreeting(username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem("username");

  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
