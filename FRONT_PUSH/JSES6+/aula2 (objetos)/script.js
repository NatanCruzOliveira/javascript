//OBJETO

//Conjunto de variáveis (atributos) e funções (métodos).
/*

var quadrado = {
    lado: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return4 * lado;
    }
}

console.log(quadrado.lado());
*/

/*
var quadrado = {
    lado: 4,

    area: function() {
        return this.lado * this.lado;
    },

    perimetro: function() {
        return this.lado * 4;
    }
}

console.log(quadrado.area());

*/

var retangulo = {
    a: 4,
    b: 10,

    area: function() {
        return this.a * this.b;
    },

    perimetro: function() {
        return ( 2 * this.a + 2 * this.b);
    }
}

retangulo.a = 5;
retangulo.b = 8;

retangulo.border = 1;

console.log(retangulo.perimetro());

