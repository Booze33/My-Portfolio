const body = document.querySelector('body');
const menuBtn = document.querySelector('.hamburger');
const menuNav = document.querySelector('.mobile-nav');
const logo = document.querySelector('.logo');
const mobile_nav = document.querySelector('.tag-1');
const mobile_nav_2 = document.querySelector('.tag-2');
const mobile_nav_3 = document.querySelector('.tag-3');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  menuNav.classList.toggle('is-active');
  body.classList.toggle('active');
  logo.classList.toggle('active');
});

mobile_nav.addEventListener('click', () => {
  menuBtn.classList.remove('is-active');
  menuNav.classList.remove('is-active');
  body.classList.remove('active');
  logo.classList.remove('active');
});

mobile_nav_2.addEventListener('click', () => {
  menuBtn.classList.remove('is-active');
  menuNav.classList.remove('is-active');
  body.classList.remove('active');
  logo.classList.remove('active');
});

mobile_nav_3.addEventListener('click', () => {
  menuBtn.classList.remove('is-active');
  menuNav.classList.remove('is-active');
  body.classList.remove('active');
  logo.classList.remove('active');
});
