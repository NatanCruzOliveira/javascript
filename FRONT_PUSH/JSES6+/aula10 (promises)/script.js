var mypromise = function() {
    return new Promise(function(resolve, reject) {
    
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/natancruzoliveira')
    xhr.send(null);
    
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            }else {
                reject('erro');
            }
        }
    } //Vê se está funcionando a requisição

    })
} 

mypromise()
.then(function(response) {
    console.log(response)
})

.catch(function(error) {
    console.log(error)
})







let xhr = new XMLHttpRequest(); //instanciando uma classe

xhr.open('GET', 'https://api.github.com/users/natancruzoliveira')
xhr.send(null);

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText))
    }
} //Vê se está funcionando a requisição