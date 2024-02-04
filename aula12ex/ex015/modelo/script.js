function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto criança homem.jpeg')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'foto jovem homem.PNG')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto homem adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto idoso homem.jpeg')
            }
        } else if (fsex[1].checked) {
            genero ='Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto criança mulher.png')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'foto jovem mulher.PNG')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto mulher adulta.jpeg')
            } else {
                //Idoso
                img.setAttribute('src', 'foto idosa mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}
