import {register} from './utils.js';


const name = document.querySelector("#name");
const email = document.querySelector("#email");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const registerForm = document.querySelector(".registerForm");

registerForm.addEventListener("submit", e => {
  e.preventDefault();

  let user = {
    name: name.value,
    email: email.value,
    username: username.value,
    password: password.value
  };

  register(user);
});
