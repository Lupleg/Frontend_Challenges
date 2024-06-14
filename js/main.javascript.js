const dropdownContent = document.getElementById("dropdown-content");

dropdownContent.addEventListener("click", () => {
  dropdownContent.style.visibility = "hidden";
});

const hamburger = document.getElementById("hamburger");
const cancel = document.getElementById("cancel");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.add("active");
  hamburger.style.display = "none";
  cancel.style.display = "block";
});

cancel.addEventListener("click", () => {
  navLinks.classList.remove("active");
  hamburger.style.display = "block";
  cancel.style.display = "none";
});

function adjustIconVisibility() {
  if (window.innerWidth < 768) {
    navLinks.classList.remove("active");
    hamburger.style.display = "block";
    cancel.style.display = "none";
  } else {
    navLinks.classList.remove("active");
    hamburger.style.display = "none";
    cancel.style.display = "none";
  }
}

window.addEventListener("resize", adjustIconVisibility);
adjustIconVisibility();

const mainNav = document.getElementById("main-menu");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 150) {
    mainNav.classList.add("fixed");
  } else {
    mainNav.classList.remove("fixed");
  }
});
