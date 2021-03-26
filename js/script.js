// mobile menu
const burgerMenu = document.getElementById("burger-menu");
const overlayMenu = document.querySelector(".nav__links");
const closeMenu = document.querySelector(".close__menu");

const handleMobileMenu = () => {
  overlayMenu.classList.remove("active__mobileNav");
  overlayMenu.classList.add("active__mobileNav");
}

const handleCollapseMenu = () => {
  overlayMenu.classList.remove("active__mobileNav");
}

burgerMenu.addEventListener('click', handleMobileMenu);
closeMenu.addEventListener('click', handleCollapseMenu);