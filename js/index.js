const toggleButton = document.querySelector(".nav-hamburgermenu-icon");
const navMenu = document.querySelector(".container");
const navContainer = document.querySelector("nav");

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


const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
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
    li.classList.remove("activeLink");
    if (li.classList.contains(current)) {
      li.classList.add("activeLink");
    }
  });
}