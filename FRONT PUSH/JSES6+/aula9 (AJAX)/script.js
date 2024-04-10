let xhr = new XMLHttpRequest(); //instanciando uma classe

xhr.open('GET', 'https://api.github.com/users/natancruzoliveira')
xhr.send(null);

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText))
    }
} //Vê se está funcionando a requisição