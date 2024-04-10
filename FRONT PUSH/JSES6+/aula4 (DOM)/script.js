
//DOM (Document Object Model)

//É uma interface que representa o HTML por meio de objetos.

//Com ela é possível manipular a estrutura, conteúdo, estilo.

/*
window
    location
    document
        html
            head
                Meta
                title
            body
                h1
                p
                span
                ul
                button
                form
*/

/*
1 - SELETORES DE ELEMENTOS

var titulo = document.getElementById('titulo')
console.log(titulo)

var subtitle = document.getElementsByClassName('subtitle')
console.log(subtitle[0])
*/

/*
 Selecionando e adiconado classe no html pelo JS

const items = document.querySelectorAll('.menu .menu-item')
console.log(items)

items.forEach(function(item){
    item.classList.add('item-classe')
})

*/

/*

// 2 - CLASSES E ATRIBUTOS (ADICIONAR NO HTML PELO JS)
const img = document.querySelector('img');
const menu = document.querySelector('.menu')

console.log(menu.className); //string com as classes da tag
console.log(menu.classList); //Lista um 'ARRAY' com as classes

menu.classList.add('teste', 'lista'); //Adiciona novas classes
menu.classList.remove('lista'); //Remove a Classe
menu.classList.toggle('active'); // Verifica se tem um a classe, caso tenha remove, caso não tenha ele adicona
console.log(menu.classList.contains('active')); //Verifica se já existe essa classe e retorna true ou false (boolean)
menu.classList.replace('teste', 'test'); //Troca uma classe por outra

console.log(img.getAttribute('alt')); //puxa o que tem escrito no atributo
console.log(img.setAttribute('alt', 'Aqui é outra msg')); //Muda o que estava no atributo ou cria um novo

img.removeAttribute('src'); //Remove um atributo

*/

// 3 - COMO CRIAR ELEMENTOS COM JS E ALTERAR COM CSS

/*
let link = document.createElement('a');
link.setAttribute('href', 'https://google.com.br');

var conteudo = document.createTextNode('Acessar o Google');

link.appendChild(conteudo);

let container = document.getElementById('app');
container.appendChild(link);

link.style.backgroundColor = 'green';
link.style.textDecoration = 'none';
link.style.color = 'white'

let box = document.querySelector('.box');
box.style.width = '200px';
box.style.height = '200px';
box.style.backgroundColor = 'blue';

// 4 - MOSTRAR LARGURA E ALTURA DE ALGUM ELEMENTO OU DA SUA TELA INTEIRA 

console.log(box.clientWidth);
console.log(box.offsetTop);
console.log(window.innerWidth);
console.log(window.outerHeight);

*/

// 5 - TRABALHANDO COM EVENTOS NO DOM

let h1 = document.querySelector('h1');


//h1.addEventListener('mousemove', function() {
//  console.log('O usuário clicou no titulo')
//})

function callback(event) {
   h1.classList.toggle('red')
}

h1.addEventListener('click', callback)

