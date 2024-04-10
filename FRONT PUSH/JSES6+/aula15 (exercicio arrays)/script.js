/*
EXERCICIO DE SOMA DE ARRAYS

const vetor = [5, 10, 19, 24, 80]


//instanciando a função, construindo a função
function somaarray(array) {

    var total = 0;

    for(let i = 0; i < array.length; i++) {

        total = total + array[i];
    }

    return total;
}

console.log(somaarray(vetor));
*/

VERIFICANDO SE ESXISTE UM NOME DIGITADO DENTRO DO ARRAY E RETORNANANDO EXISTE OU NÂO EXISTE

const nomes = ['joão', 'maria', 'pedro', 'carol'];

const texto = document.querySelector('input');
const botao = document.querySelector('button');
const titulo = document.querySelector('h2');

nomes.includes(texto.value)

botao.addEventListener('click', function(){

    if (nomes.includes(texto.value)) {
        titulo.innerHTML = 'EXISTE';
    } else {
        titulo.innerHTML = 'NÂO EXISTE';
    }

})