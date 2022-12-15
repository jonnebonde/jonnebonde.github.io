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
  x.onclick = function() {
    toggleButton.classList.toggle("active");
    navMenu.classList.toggle("active");
  }
})
  

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .nav-link-container ul li");
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
    }
  });
}


const items = document.querySelectorAll(".card");
const itemCount = items.length;
const nextItem = document.querySelector(".next");
const previousItem = document.querySelector(".previous");
let count = 0;

function showNextItem() {
  items[count].classList.remove('active');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add('active');
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove('active');

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('active');
  console.log(count);
}

function keyPress(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);