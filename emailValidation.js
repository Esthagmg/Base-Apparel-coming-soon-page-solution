// var alertMessage = document.getElementById("alertMessage");
// var alertImage = document.getElementById("alertImage");
// var emailDiv = document.getElementById("emailDiv");

// function ValidateEmail(inputText) {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if(inputText.value.match(mailformat)) {
       
//         document.form1.text1.focus();
//         alertMessage.style.display = "none";
//         alertImage.style.display = "none";
//         emailDiv.style.borderColor = "hsl(0, 36%, 70%)";
//         return true;
//     } else {
//         alertImage.style.display = "block";
//         alertMessage.style.display = "block";
//         emailDiv.style.borderColor = "red";
        
//         document.form1.text1.focus();
//         return false;
//     }
// }

// const form = document.querySelector("#form");
// const alertMessage = document.querySelector(".alert");
// const email = document.querySelector(".email");
// const btnValidateEmail = document.getElementById("btnValidateEmail");

// function isValidEmail(userEmail) {
//     const regexEmail =
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     return regexEmail.test(userEmail);
// }

// function validateField() {
//     const emailValue = email.value;
//     console.log(email);
  
//     if (isValidEmail(emailValue)) {
//         alertMessage.innerText = "";
//         alertMessage.classList.remove("invalid");
//     } else {
//         alertMessage.innerText = "Please provide a valid email";
//         email.classList.add("invalid");
//         btnValidateEmail.style.outline = "none";
//     }
// }

// form.addEventListener("submit", (event) => {
//     validateField();
//     event.preventDefault();
// });

const emailInput = document.querySelector('#email');
const button = document.querySelector('#submit');
const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const iconError = document.querySelector('.icon-error');
const textError = document.querySelector('.text-error');
const fromGroup = document.querySelector('.form-group');
let errors = [];

button.addEventListener('click', events => {
  textError.classList.remove('text-success');
  errors = [];
  events.preventDefault();
  const email = emailInput.value;

  if (email == '' || email === undefined || !email.match(emailRegex)) {
    errors.push('Please provide a valid email');
    iconError.style.display = 'block';
    textError.innerText = errors[0];
    emailInput.style.borderColor = "red";
  }

  if (!errors.length > 0) {
    iconError.style.display = 'none';
    textError.classList.add('text-success');
    textError.innerText = 'Thank you for subscribing to our newsletter.';
  }
});