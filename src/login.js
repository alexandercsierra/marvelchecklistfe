import {login} from './utils.js';

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const loginForm = document.querySelector(".loginForm");
const signUpBtn = document.querySelector(".signUpBtn");

signUpBtn.addEventListener('click', ()=>{
  window.location.href="./signup.html"
})

loginForm.addEventListener("submit", e => {
  e.preventDefault();

  let user = {
    username: username.value,
    password: password.value
  };

  login(user);
});
