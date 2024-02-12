var num = [5, 8, 2, 9, 3]
num[3] = 6
//num.sort()
num.push(0)

console.log(`Nosso vetor tem ${num.length}`)
console.log(num[0])

/*
for (var pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

//Ou faça da maneira abaixo, mais simplificado

for (var pos in num) {
   console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}


var s = num.indexOf(1)

if (s == -1) {
    console.log('Essa variável não existe na posição!')
} else {
    console.log('A variável na posição 3 é ' + s)
}




