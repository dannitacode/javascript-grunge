const form = document.forms[0]
const inputNombre = form['nombre']
const inputApellido = form['apellido']
const inputEmail = form['email']
const selectSexo = form['sexo']
const inputFecha = form['fechaNacimiento']

/* Expresiones regulares */
const regexNombreApellido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ/s]+$/
const regexEmail = /^\w+@(gmail|outlook|yahoo)\.com$/

function validaciones() {
    let flag = true;
    const nombreValue = inputNombre.value.trim()
    const apellidoValue = inputApellido.value.trim()
    const emailValue = inputEmail.value.trim()

    if (!regexNombreApellido.test(nombreValue) || (nombreValue.length < 3 || nombreValue.length > 10)) {
        console.log('Error: Nombre debe de ser mayor a 3 caracteres y menor a 10. Solo letras')
        inputNombre.style.border = '2px solid red'
        flag = false
    } else {
        console.log('Nombre correcto.')
        inputNombre.style.border = '2px solid green'
    }

    if (!regexNombreApellido.test(apellidoValue) || (apellidoValue.length < 3 || apellidoValue.length > 10)) {
        console.log('Error: Apellido debe de ser mayor a 3 caracteres y menor a 10. Solo letras.')
        inputApellido.style.border = '2px solid red'
        flag = false;
    } else {
        console.log('Apellido correcto.')
        inputApellido.style.border = '2px solid green'
    }

    if (!regexEmail.test(emailValue)) {
        console.log('Error: Escriba un correo valido.')
        inputEmail.style.border = '2px solid red'
        flag = false
    } else {
        console.log('Correo correcto.')
        inputEmail.style.border = '2px solid green'
    }

     if (selectSexo.options[selectSexo.selectedIndex].text === 'Escoja una opcion') {
        console.log('Seleccione una opcion antes de continuar.')
        selectSexo.style.border = '2px solid red'
        flag = false;
    } else {
        console.log('Sexo correcto.')
        selectSexo.style.border = '2px solid green'
    }

    if (!inputFecha.value) {
        console.log('Seleccione una fecha antes de continuar.')
        inputFecha.style.border = '2px solid red'
        flag = false
    } else {
        console.log('Fecha correcta.')
        inputFecha.style.border = '2px solid green'
    }

    if (flag === true) {
        form.reset()
        campos()
        return false
    } else {
        return false
    }
}

function campos() {
    inputNombre.style.border = 'none'
    inputApellido.style.border = 'none'
    inputEmail.style.border = 'none'
    inputFecha.style.border = 'none'
    selectSexo.style.border = 'none'
}