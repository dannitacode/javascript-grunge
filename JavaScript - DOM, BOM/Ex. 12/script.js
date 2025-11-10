const form = document.forms[0]
const select = document.getElementsByTagName('select')
const texto = form['texto']
const botonAgregar = form['boton-agregar']
const botonModificar = form['boton-modificar']
const botonEliminar = form['boton-eliminar']
const span = document.getElementsByTagName('span')
/* Expresion regular */
const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ/s]+$/

function funcionAgregar() {
    if (!regex.test(texto.value.trim())) {
        texto.style.borderColor = 'red'
        span[0].textContent = 'Ingrese una descripcion valida'
        span[0].style.display = 'block'
    } else {
        const option = document.createElement('option')
        option.text = texto.value.trim()
        select[0].appendChild(option)
        span[0].textContent = ''
        span[0].style.display = ''
        texto.style.borderColor = 'revert'
    }
}

function funcionModificar() {
    if (!regex.test(texto.value.trim())) {
        texto.style.borderColor = 'red'
        span[0].textContent = 'Ingrese una descripcion valida'
        span[0].style.display = 'block'
    } else {
        select[0].options[select[0].selectedIndex].text = texto.value.trim()
        span[0].textContent = ''
        span[0].style.display = ''
        texto.style.borderColor = 'revert'
    }
}

function funcionEliminar() {
    select[0].options[select[0].selectedIndex].remove()
}



