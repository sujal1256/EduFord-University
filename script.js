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
