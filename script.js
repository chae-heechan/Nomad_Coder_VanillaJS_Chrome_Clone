const loginInput = document.querySelector("#login-form input");
const LoginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    const username = loginInput.value;
    console.log(username)
}

LoginButton.addEventListener("click", onLoginBtnClick);