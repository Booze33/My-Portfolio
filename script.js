const menuBtn = document.querySelector('.hamburger');
const menuNav = document.querySelector('.mobile-nav');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  menuNav.classList.toggle('is-active');
});