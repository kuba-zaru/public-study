const mainTitle = document.querySelector('#main-title');

const subTitle = document.querySelector('.sub-title');

const h1 = document.querySelector('h1');

const list = document.querySelectorAll('.item');

h1.innerHTML = 'AAAAA <span style="color: blue;">BBBBB</span>';

console.log(h1.textContent);

h1.style.color = 'red';

h1.classList.add('underline');
// h1.classList.remove('underline');
// h1.classList.toggle('underline');

const ul = document.querySelector('ul');

const firstLi = ul.querySelector('li');

firstLi.style.color = 'black';

const li = document.querySelectorAll('ul > li');

li.forEach(node => node.style.color = 'purple');