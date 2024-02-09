function calcular() {
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')


    if (num.value.length != 0) {
        var n = Number(num.value)
        tab.innerHTML = ''

        for (c=1; c <= 10; c += 1) {

            var item = document.createElement('option')
            tab.appendChild(item)

            item.value = `tab${c}`
            item.text = `${n} x ${c} = ${n*c}`
            
        }

    } else {
        alert('Por favor digite um número!')
    }

    
}
