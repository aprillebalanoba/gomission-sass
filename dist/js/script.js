const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 80) {
    header.classList.add("blue");
    // header.style = "background:hsl(213, 76%, 31%); transition:.5s ease;";
  } else {
    header.classList.remove("blue");
    // header.style = "background:transparent; transition:.5s ease;";
  }
});


const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".header__actions ul");
const body = document.querySelector(".body");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  mobileNav.classList.toggle("open");
  // body.style = "overflow:hidden;";
  body.classList.toggle("open");

});


const links = document.querySelectorAll(".footer__item h4");

links.forEach((link) => {
  link.addEventListener("click", () => {
    link.nextElementSibling.classList.toggle("open");
    link.querySelector("i").classList.toggle("open");
  });
});