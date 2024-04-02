
var listelement = document.querySelector('.list');
var textelement = document.querySelector('input');
var buttonelement = Document.querySelector('button');

var arr = [
    'ver aulas do frontpush de JS',
    'Tentar executar sozinho',
    'Fazer um Café',
];
console.log(arr.length)

function renderTodo() {
    /*
    for(var i = 0; i < arr.length; i++) {
        console.log(i)
    }
    */
    arr.forEach(function(item, index) {
        var lielement = document.createElement('li');
        var litext = document.createTextNode(item);

        var linkLi = document.createElement('a');
        var TextLink = document.createTextNode('Excluir');

        linkLi.appendChild(TextLink)
        linkLi.setAttribute('href', '#')
        linkLi.setAttribute('onclick', 'deleteitem('+ index +')')

        lielement.appendChild(litext);
        lielement.appendChild(linkLi);
        listelement.appendChild(lielement);
    }) 

    }

renderTodo();

buttonelement.addEventListener('click', additem)

function additem() {
    var itemtexto = textelement.value;
    arr.push(itemtexto);
    renderTodo();
}

function deleteitem(pos) {
    arr.splice(pos, 1);

    renderTodo();
}