
document.querySelectorAll('.accordion-content').forEach(function(item){
    item.style.maxHeight = 0;
})

const buttons = document.querySelectorAll('.accordion-button')

    buttons.forEach(function(buttons){
        
        buttons.addEventListener('click', function() {
        const accordionContent = buttons.nextElementSibling;

        buttons.classList.toggle('active');

        if(buttons.classList.contains('active')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
        accordionContent.style.maxHeight = 0;
        }

    })
})