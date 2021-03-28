// mobile menu
const burgerMenu = document.getElementById("burger-menu");
const overlayMenu = document.querySelector(".nav__links");
const closeMenu = document.querySelector(".close__menu");
// Pledge Options
const backProjectBtn = document.getElementById('back__proj');
const collapseModal = document.querySelector('.close__modal');
const modal = document.querySelector('.overlay');
const mainModal = document.querySelector('#modal');
// Thank You! Modal
const continueBtn = document.querySelectorAll(".continue__btn");
const successMessage = document.querySelector('.success__modal');
// Clear Modals
const clearModal = document.getElementById('clear-modal');

const handleMobileMenu = () => {
  overlayMenu.classList.remove("active__mobileNav");
  overlayMenu.classList.add("active__mobileNav");
}

const handleCollapseMenu = () => {
  overlayMenu.classList.remove("active__mobileNav");
}

const handleOpenModal = () => {
  successMessage.classList.remove('thanks__message');
  modal.classList.remove('active__modal');
  modal.classList.add('active__modal');
  mainModal.style.display = 'block';
}

const handleModalCollapse = () => {
  modal.classList.remove('active__modal');
}

const handleContinuePledge = () => {
  successMessage.classList.remove('thanks__message');
  successMessage.classList.add('thanks__message');
  mainModal.style.display = 'none';
  
}

const handleClearModal = () => {
  modal.classList.remove('active__modal');
}

burgerMenu.addEventListener('click', handleMobileMenu, false);
closeMenu.addEventListener('click', handleCollapseMenu, false);
backProjectBtn.addEventListener('click', handleOpenModal, false);
collapseModal.addEventListener('click', handleModalCollapse, false);
continueBtn.forEach(item => {
    item.addEventListener('click', handleContinuePledge, false);
});
clearModal.addEventListener('click', handleClearModal, false);