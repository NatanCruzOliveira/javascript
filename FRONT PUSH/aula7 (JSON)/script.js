//JSON.parse(); //Transforma o texto JSON em objeto
//JSON.stringify(); //Quero trasnformar um objeto em um arquivo JSON

const json = JSON.parse('{"id": 1,"nome": "Notebook Dell","modelo": "Gamer","quantidade": 5}');

const caneta = {
    cor: 'azul',
    formato: 'triangular',
    tipo: 'desenho'
}

console.log(json);

const stringjson = JSON.stringify(caneta)

console.log(stringjson);