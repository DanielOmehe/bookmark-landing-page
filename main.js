const menuBtn = document.querySelector('.menu-button');
const closeBtn = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navigation');
let isOpen = false;

menuBtn.addEventListener('click', ()=>{
    if(!isOpen) {
        isOpen = true;
        menu.classList.add('open');
        navbar.classList.add('open');
    }
})

closeBtn.addEventListener('click', ()=>{
    if(isOpen) {
        isOpen = false;
        menu.classList.remove('open');
        navbar.classList.remove('open');
    }
})