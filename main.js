const menuBtn = document.querySelector('.menu-button');
const closeBtn = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navigation');
let isOpen = false;
const tabs = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.features-tab');
const arrows = document.querySelectorAll('.arrow');
const questions = document.querySelectorAll('.question');

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


tabs.forEach((tab, index) => {
    tab.addEventListener('click', ()=>{
        tabs.forEach(tabs => tabs.classList.remove('active'))
        tab.classList.add('active');

        tabContents.forEach(content => content.classList.remove('active'))
        tabContents[index].classList.add('active');
    })
});

arrows.forEach((arrow, index) => {
    arrow.addEventListener('click', ()=>{
        arrows.forEach(arrows => arrows.classList.remove('active'))
        if(!isOpen) {
            arrow.classList.add('active');
        }else{
            arrow.classList.remove('active');
        }

        questions.forEach(question => question.classList.remove('active'));
        if(!isOpen){
            questions[index].classList.add('active');
            questions[index].firstChild.nextSibling.style.color = 'red';
            isOpen = true;
        }else{
            isOpen = false;
            questions[index].classList.remove('active');
            questions[index].firstChild.nextSibling.style.color = 'black';
        }
    })
});