import { projects } from "./constants/ProjectsList.js";
import { renderProjectCards } from "./components/ProjectCards.js";
import { validateInputs } from "./components/validateContactForm.js";

renderProjectCards(projects)


const toggleButton = document.querySelector(".nav-hamburgermenu-icon");
const navMenu = document.querySelector(".nav-link-container");
const navContainer = document.querySelector("nav");
const linkButton = document.querySelectorAll(".nav-link-container a");
console.log("asdf")

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
  };
});

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

      // make the first letter in uppercase
      const firstLetterUpperCase = current.charAt(0).toUpperCase() + current.slice(1);

      pageTitle.innerHTML = `[</>] Jonne - ${firstLetterUpperCase}`;
    }
  });
};

const form = document.getElementById("contactForm");

form.addEventListener("submit", validateInputs);


