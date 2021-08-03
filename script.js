const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){
    event.preventDefault();
    console.log(loginInput.value)
    // 공부합시다
} 

loginForm.addEventListener("submit", onLoginSubmit);