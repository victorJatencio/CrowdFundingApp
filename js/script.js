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

// Pledge Options
const backProjectBtn = document.getElementById('back__proj');
const collapseModal = document.querySelector('.close__modal');
const modal = document.querySelector('.overlay');

const handleOpenModal = () => {
  modal.classList.remove('active__modal');
  modal.classList.add('active__modal');
}

const handleModalCollapse = () => {
  modal.classList.remove('active__modal');
}

backProjectBtn.addEventListener('click', handleOpenModal);
collapseModal.addEventListener('click', handleModalCollapse);