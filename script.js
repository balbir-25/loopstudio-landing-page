const navUl = document.querySelector('.nav-ul');
const open = document.getElementById('open');
const close = document.getElementById('close');
const header = document.getElementById('header');

open.addEventListener('click', () => {
    open.style.display = 'none';
    close.style.display = 'block';
    navUl.style.display = 'block';
    header.style.background = 'black';

});

close.addEventListener('click', () => {
    close.style.display = 'none';
    navUl.style.display = 'none';
    open.style.display = 'block';
    header.style.background = '';
});