const menuBtn = document.querySelector('.hamburger');
const menuNav = document.querySelector('.mobile-nav');
menu_btn.addEventListener('click', () => {
  menu_btn.classList.toggle('is-active');
  menu_nav.classList.toggle('is-active')
});