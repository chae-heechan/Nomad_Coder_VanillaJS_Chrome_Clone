const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem("userName", loginInput.value);
    greeting.innerText = `Hello ${localStorage.getItem("userName")}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
} 

loginForm.addEventListener("submit", onLoginSubmit);