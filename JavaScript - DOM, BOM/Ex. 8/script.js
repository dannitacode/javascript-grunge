const pesosInput = document.getElementById('pesos')
const dolaresInput = document.getElementById('dolares')
const span = document.getElementById('error')
const boton1 = document.getElementById('boton1')
const boton2 = document.getElementById('boton2')
const regexNumeros = /^\d+(\.\d+)?$/
let flag = true

function conversionPesosADolares() {
    if (flag === true) {
        pesosInput.disabled = false
        flag = false;
        return false
    }
    
    if (flag === false) {
        if (!regexNumeros.test(pesosInput.value.trim())) {
            span.style.display = 'block'
            span.textContent = '☠️ Formato de pesos invalido. Solo digitos, con o sin decimales'
            return false
        } else {
            span.style.display = 'none'
            span.textContent = ''
        }
        const pesosValue = pesosInput.value.trim()
        boton1.addEventListener('click', dolaresInput.value = pesosValue * 0.00071)
        flag = true
    }
}

function conversionDolaresAPesos() {
    if (flag === true) {
        dolaresInput.disabled = false
        flag = false;
        return false
    }
    if (!regexNumeros.test(dolaresInput.value.trim())) {
        span.style.display = 'block'
        span.textContent = '☠️ Formato de dolares invalido. Solo digitos, con o sin decimales'
        return false
    } else {
        span.style.display = 'none'
        span.textContent = ''
    }

    const dolaresValue = dolaresInput.value.trim()
    boton2.addEventListener('click', pesosInput.value = dolaresValue * 1417)
    flag = true
    
}

function limpiar() {
    flag = true
    pesosInput.value = ''
    dolaresInput.value = ''
    pesosInput.disabled = true
    dolaresInput.disabled = true
}