const toggleButton = document.querySelector(".nav-hamburgermenu-icon");
const navMenu = document.querySelector(".nav-link-container");
const navContainer = document.querySelector("nav");
const linkButton = document.querySelectorAll(".nav-link-container a");


toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!navContainer.contains(e.target)) {
    navMenu.classList.remove("active");
    toggleButton.classList.remove("active");
  }
});

linkButton.forEach(function (x) {
  x.onclick = function () {
    toggleButton.classList.toggle("active");
    navMenu.classList.toggle("active");
  }
})

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .nav-link-container ul li");
const pageTitle = document.querySelector("title");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 4.2) {
      current = section.getAttribute("id");
      
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active_link");
  
    if (li.classList.contains(current)) {
      li.classList.add("active_link");
      console.log(current)
      const firstLetterUpperCase = current.charAt(0).toUpperCase() + current.slice(1);
      // make the first letter in uppercase
      pageTitle.innerHTML = `[</>] Jonne - ${firstLetterUpperCase}`;
    }
  });
}


const contactFormUrl = "https://jonnekrosby.site/project-exam1/wp-json/contact-form-7/v1/contact-forms/190/feedback";

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


const formSuccess = document.querySelector(".contact-form-success");
const form = document.getElementById("contactForm");
let successMessage = false;

function validateInputs(event) {
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

    fetch(contactFormUrl, {
      method: "post",
      body: contactData,
    })
      .then((response) => {
        if (!response.ok) {
          formSubmitError()
        } else {
          formSubmitSuccesfull();
        }
      })
      .catch(error => console.error("error", error));
  }
}

form.addEventListener("submit", validateInputs);

function formSubmitSuccesfull() {
  formSuccess.style.display = "block";
  formSuccess.innerHTML = `
      <div class="flex-col">
        <span>Thank u ${nameInput.value}</span>
        <span>I will contact u within 24 hours</span>
        <span>on ${emailInput.value}</span>
      </div>`;
  resetPage();
}

function formSubmitError() {
  formSuccess.style.display = "block";
  formSuccess.innerHTML = `<div>Sorry, But something went wrong sending youre form</div>`;
  resetPage();
}

// Refresh page

function resetPage() {
  setTimeout(function () {
    window.location.reload(true);
  }, 3000);
}

// regex for checking email
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

// Checking length of input against required length
function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  }
}