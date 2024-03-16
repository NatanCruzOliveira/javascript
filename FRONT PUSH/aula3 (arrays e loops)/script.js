//ARRAY

// Variável com vários compartimentos

/*
let frutas = ['maça', 'uva', 'banana', 'laranja', ['papaya', 'nanica']];


console.log(frutas[4][1])

frutas.pop(); //remove o último item e o retorna
frutas.push('kiwi'); //adiciona um item no final da lista 



//estruturas de repetição

// 1 - como começa a interação?
// 2 - Como termina a interação ?
// 3 - Como modifica a interação ? 

for (let i = 1; i <= 12;  i += 1) {
    console.log(i);
}


let i = 0;
while (i <= 4) {
    console.log(i + ': ' + frutas[i]);
    i++;
}
*/

// ARRAY E INTERAÇÕES

//let marcas = ['VW', 'Fiat', 'Renault', 'Ferrari', 'Audi'];
//let carros = ['gol', 'argo', 'kwid', 'La Ferrari', 'A3'];

/*
for (let pos in marcas) {
    console.log(marcas[pos])
}


marcas.forEach(function(item, index, array) {
    console.log(index + '  ' + item);
});



const carrosmarcas = marcas.map(function(item, index){
    return item + ':' + carros[index];
});

carrosmarcas.forEach(function(item){
    console.log(item);
});


const li = document.querySelectorAll('li');

li.forEach(function(item, index, array) {
    item.classList.add('item');
})
*/

var numeros = [1, 2, 3, 5];

var numerosx2 = numeros.map(function(item) {
    return item*2
})

console.log(numerosx2)