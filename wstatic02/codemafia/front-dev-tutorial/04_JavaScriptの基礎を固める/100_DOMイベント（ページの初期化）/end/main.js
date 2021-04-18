document.addEventListener("DOMContentLoaded", function () {
    const dcl = document.querySelector('.dcl');
    dcl.classList.add('done');

    const h1 = document.querySelector('h1');
    h1.style.color = 'red';
});

window.addEventListener("load", function () {
    const load = document.querySelector('.load');
    load.classList.add('done');
});