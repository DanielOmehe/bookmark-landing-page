// const menuBtn = document.querySelector('.menu-button');
// const closeBtn = document.querySelector('.close-menu');
// const menu = document.querySelector('.menu');
// const navbar = document.querySelector('.navigation');
// let isOpen = false;
// const tabs = document.querySelectorAll('.tab-item');
// const tabContents = document.querySelectorAll('.features-tab');
// const arrows = document.querySelectorAll('.arrow');
// const questions = document.querySelectorAll('.question');
// const line = document.querySelector('.line')

// menuBtn.addEventListener('click', ()=>{
//     if(!isOpen) {
//         isOpen = true;
//         menu.classList.add('open');
//         navbar.classList.add('open');
//     }
// })

// closeBtn.addEventListener('click', ()=>{
//     if(isOpen) {
//         isOpen = false;
//         menu.classList.remove('open');
//         navbar.classList.remove('open');
//     }
// })

// tabs.forEach((tab, index) => {
//     tab.addEventListener('click', (e)=>{
//         tabs.forEach(tabs => tabs.classList.remove('active'))
//         tab.classList.add('active');

//         tabContents.forEach(content => content.classList.remove('active'))
//         tabContents[index].classList.add('active');

//         line.style.width = `${e.target.offsetWidth}px`
//         line.style.left = `${e.target.offsetLeft}px`
//     })
// });

// arrows.forEach((arrow, index) => {
//     arrow.addEventListener('click', ()=>{
//         arrows.forEach(arrows => arrows.classList.remove('active'))
//         if(!isOpen) {
//             arrow.classList.add('active');
//         }else{
//             arrow.classList.remove('active');
//         }

//         questions.forEach(question => question.classList.remove('active'));
//         if(!isOpen){
//             questions[index].classList.add('active');
//             isOpen = true;
//         }else{
//             isOpen = false;
//             questions[index].classList.remove('active');
//         }
//     })
// });

// const contactForm = document.querySelector('.contact-form');
// const emailField = document.querySelector('input');

// const onError = (e, message) => {
//   const parent = e.target.parentElement;
//   const inputGroup = parent.firstChild.nextSibling;
//   const input = inputGroup.querySelector('input');
//   const error = inputGroup.querySelector('.text');

//   if(error){
//     input.classList.add('error');
//     error.classList.add('error');
//     error.innerHTML = message;
//   }
// }

// const onSuccess = e => {
//     const parent = e.target.parentElement;
//     const inputGroup = parent.firstChild.nextSibling;
//     const input = inputGroup.querySelector('input');
//     const error = inputGroup.querySelector('.text');

//     input.classList.remove('error');
//     error.classList.remove('error');
// }

// contactForm.addEventListener('click', (e)=>{
//     e.preventDefault();
//     const email = emailField.value;

//     if(email === ''){
//         onError(e, 'Email is required!!!')
//     }else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
//         onError(e, 'Email is invalid!!!')
//     }else{
//         onSuccess(e)
//     }
// })

//Select the tabs
const tabItems = document.querySelectorAll(".tab-item"),
  hoverLine = document.querySelector(".line"),
  tabContents = document.querySelectorAll(".features-tab");

hoverLine.style.width = `${tabItems[0].offsetWidth}px`;
hoverLine.style.transform = `translateX(${tabItems[0].offsetLeft}px)`;
tabItems[0].classList.add("active");

//Add a click event listener to each tab
tabItems.forEach((item, indx) => {
  item.addEventListener("click", () => {
    tabItems.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");

    tabContents.forEach((tab) => tab.classList.remove("active"));
    tabContents[indx].classList.add("active");

    hoverLine.style.width = `${item.offsetWidth}px`;
    hoverLine.style.transform = `translateX(${item.offsetLeft}px)`;
  });
});

// select the FAQ accordion
const accordions = document.querySelectorAll(".question-header");
let currentAccordionIndx = 0;
//Add a click event to each of the accordions
accordions.forEach((accordion, indx) => {
  accordion.addEventListener("click", () => {
    const arrow = accordions[currentAccordionIndx].querySelector('.arrow');
    const openAccordion = () => {
      return currentAccordionIndx === indx;
    };
    accordions.forEach((accordion) =>
      accordion.parentElement.classList.remove("active")
    );

    currentAccordionIndx = indx;
    accordions[currentAccordionIndx].parentElement.classList.toggle("active");
    arrow.style.transform = "rotate(180deg)";

    if(!accordions[currentAccordionIndx].parentElement.classList.contains("active")){
      arrow.style.transform = "rotate(0)";
    }

    if (!openAccordion()) {
      accordions[currentAccordionIndx].parentElement.classList.remove("active");
    }
  });
});
