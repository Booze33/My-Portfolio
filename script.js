const menu_btn = document.querySelector('.hamburger');
const menu_nav = document.querySelector('.mobile-nav');
menu_btn.addEventListener('click', function (){
    menu_btn.classList.toggle('is-active')
    menu_nav.classList.toggle('is-active')
})