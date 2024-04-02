document.documentElement.addEventListener('mousemove', mousemove)

function mousemove(event) {

    const {clientX, clientY} = event;

    //const clientX = event.clientX;
   // const clientY = event.clientY;
    console.log(clientX, clientY);
}

const carros = ['volks', 'fiat', 'bmw'];

const [marca1, marca2, marca3] = carros;

console.log(marca1)