axios.get('https://api.github.com/users/natancruzoliveira')
.then(function(response) {
    console.log(response);
})

.catch(function(error) {
    console.log(error);
})