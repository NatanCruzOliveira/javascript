
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