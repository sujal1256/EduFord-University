'use strict'
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const close = document.querySelector('.close');
menu.addEventListener('click', () => {
    nav.classList.add('open-nav');
});
close.addEventListener('click', () => {
    nav.classList.remove('open-nav');
});

const liEles = document.getElementsByClassName('li-link');
const activeEle = document.querySelector('.active');
// Array.from(liEles).forEach(element => {
//     element.addEventListener('click',()=>{
//         activeEle.classList.remove('active');
//         element.classList.add('active');

//     })
// });