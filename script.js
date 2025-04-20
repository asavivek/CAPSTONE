'use strict';

/**----------- navbar toggle ---------*/

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);


/**--------- header sticky & go to top -------*/

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
  
 
});


// login form

function validateLogin(event) {
  event.preventDefault();
  
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;
  let emailerrorMsg = document.getElementsByClassName("email-error");
  let passworderrorMsg = document.getElementsByClassName("password-error");

  if (!email.includes("@") || email.length < 5) {
      emailerrorMsg.innerText = "Enter a valid email.";
      return false;
  }
  if (password.length < 6) {
      passworderrorMsg.innerText = "Password must be at least 6 characters.";
      return false;
      console.log("hello");
  }
  alert("Login Successful!");
  window.location.href = "index.html"; // Redirect after login
  return false;
}

function validateSignup(event) {
  event.preventDefault();
  let name = document.getElementById("signup-name").value;
  let email = document.getElementById("signup-email").value;
  let password = document.getElementById("signup-password").value;
  let errorMsg = document.getElementById("signup-error");

  if (name.trim() === "") {
      errorMsg.innerText = "Full Name is required.";
      return false;
  }
  if (!email.includes("@") || email.length < 5) {
      errorMsg.innerText = "Enter a valid email.";
      return false;
  }
  if (password.length < 6) {
      errorMsg.innerText = "Password must be at least 6 characters.";
      return false;
  }
  errorMsg.innerText = "";
  alert("Sign-Up Successful!");
  window.location.href = "index.html"; // Redirect to login after signup
  return false;
}
