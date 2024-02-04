var idade = 67
if (idade < 16) {
    console.log('você não pode votar')
} else if (idade >= 16 && idade < 18 || idade > 65) {
        console.log('Voto é opcional')
} else {
        console.log('Voto é obrigatório')
}
