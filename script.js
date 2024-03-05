//toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
//scroll section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

function setActiveLink() {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
      });
      document
        .querySelectorAll("header nav a[href*=" + id + "]")
        .forEach((link) => {
          link.classList.add("active");
        });
    }
  });
}

window.onscroll = () => {
  setActiveLink();

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //remove toggle icon
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
