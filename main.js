const menuBtn = document.querySelector('.menu-button');
const closeBtn = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navigation');
let isOpen = false;
const tabs = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.features-tab');
const arrows = document.querySelectorAll('.arrow');
const questions = document.querySelectorAll('.question');
const line = document.querySelector('.line')

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
    tab.addEventListener('click', (e)=>{
        tabs.forEach(tabs => tabs.classList.remove('active'))
        tab.classList.add('active');

        tabContents.forEach(content => content.classList.remove('active'))
        tabContents[index].classList.add('active');

        line.style.width = `${e.target.offsetWidth}px`
        line.style.left = `${e.target.offsetLeft}px`
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
            isOpen = true;
        }else{
            isOpen = false;
            questions[index].classList.remove('active');
        }
    })
});

const contactForm = document.querySelector('.contact-form');
const emailField = document.querySelector('input');

const onError = (e, message) => {
  const parent = e.target.parentElement;
  const inputGroup = parent.firstChild.nextSibling;
  const input = inputGroup.querySelector('input');
  const error = inputGroup.querySelector('.text');
  
  if(error){
    input.classList.add('error');
    error.classList.add('error');
    error.innerHTML = message;
  }
}

const onSuccess = e => {
    const parent = e.target.parentElement;
    const inputGroup = parent.firstChild.nextSibling;
    const input = inputGroup.querySelector('input');
    const error = inputGroup.querySelector('.text');

    input.classList.remove('error');
    error.classList.remove('error');
}

contactForm.addEventListener('click', (e)=>{
    e.preventDefault();
    const email = emailField.value;

    if(email === ''){
        onError(e, 'Email is required!!!')
    }else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        onError(e, 'Email is invalid!!!')
    }else{
        onSuccess(e)
    }
})