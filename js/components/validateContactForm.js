import { sendContactForm } from "./sendContactForm.js";
import { checkLength, validateEmail } from "./utilities.js";

const hiddenInput = document.getElementById("hidden");

const nameValid = document.querySelector(".name");
const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");

const messageValid = document.querySelector(".message");
const messageInput = document.getElementById("message");
const messageError = document.getElementById("messageError");

const subjectValid = document.querySelector(".subject");
const subjectInput = document.getElementById("subject");
const subjectError = document.getElementById("subjectError");

const emailValid = document.querySelector(".email");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

let successMessage = false;

export function validateInputs(event) {
  event.preventDefault();

  const name = checkLength(nameInput.value, 1);
  const email = validateEmail(emailInput.value);
  const subject = checkLength(subjectInput.value, 7);
  const message = checkLength(messageInput.value, 9);
  const hidden = checkLength(hiddenInput.value, 1);

  if (name) {
    nameError.style.visibility = "hidden";
    nameValid.style.color = "#EEEEEE";
    nameValid.style.backgroundColor = "#00540A";
  } else {
    nameError.style.visibility = "visible";
    nameValid.style.backgroundColor = "";
    nameValid.style.color = "";
  }
  if (subject) {
    subjectError.style.visibility = "hidden";
    subjectValid.style.color = "#EEEEEE";
    subjectValid.style.backgroundColor = "#00540A";
  } else {
    subjectError.style.visibility = "visible";
    subjectValid.style.color = "";
    subjectValid.style.backgroundColor = "";
  }
  if (email) {
    emailError.style.visibility = "hidden";
    emailValid.style.color = "#EEEEEE";
    emailValid.style.backgroundColor = "#00540A";
  } else {
    emailError.style.visibility = "visible";
    emailValid.style.color = "";
    emailValid.style.backgroundColor = "";
  }
  if (message) {
    messageError.style.visibility = "hidden";
    messageValid.style.color = "#EEEEEE";
    messageValid.style.backgroundColor = "#00540A";
  } else {
    messageError.style.visibility = "visible";
    messageValid.style.color = "";
    messageValid.style.backgroundColor = "";
  }
  if (hidden) {
    return;
  }
  if (name && subject && email && message) {
    successMessage = true;

    let contactData = new FormData();
    contactData.append("your-name", nameInput.value);
    contactData.append("your-email", emailInput.value);
    contactData.append("your-subject", subjectInput.value);
    contactData.append("your-message", messageInput.value);

    sendContactForm(contactData);
  }
}
