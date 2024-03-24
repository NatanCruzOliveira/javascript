const button = document.querySelector('button');
const modal = document.getElementById('mymodal');
const close = document.querySelector('.close')

button.addEventListener('click', function() {
    modal.classList.add('modal-active');
})

close.addEventListener('click', function() {
    modal.classList.remove('modal-active');
})


