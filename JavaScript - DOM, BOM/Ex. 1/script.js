/* Realice una expresión regular que valide cada uno de los enunciados siguientes:​
- Bytes​​
- Input de html (para tipo password, text o email, con el atributo name).​
- Oraciones con exactamente 5 palabras y termine en un punto.​
- Números hexadecimales.​ ​
- URL (https://www.campusvirtual.ulp.edu.ar/ o http://google.com.ar).​
- Notación científica (9.11x10^-8 o 1.25x10^12).​
- Formato Moneda (3.050.028,75$ o 1.000.000,50€).​
- Patente de autos argentinos (antiguo o nuevo sistema).​
- Fecha y hora (13/10/2025 19:13:03 GMT-0300). */

/* Bytes */
const regexBytes = /^\d+$/
console.log(regexBytes.test('8'))
/* Password, text, email */
function funcionForm() {
    const regexTexto = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/
    const regexPassword = /^[a-zA-Z0-9._@><#-]+$/
    const regexEmail = /^[a-z0-9._-]+@(gmail|outlook|hotmail)\.(com|ar)$/
    const form = document.forms['formulario']
    const text = form['texto']
    const contraseña = form['contraseña']
    const email = form['email']
    console.log(regexTexto.test(text.value))
    console.log(regexPassword.test(contraseña.value))
    console.log(regexEmail.test(email.value))
    return false;
}
/* Oraciones con exactamente 5 palabras y termine en un punto.​ */
const regexOraciones = /^([A-Z-a-zÁÉÍÓÚáéíóúÑñ]+\s){4}[A-Z-a-zÁÉÍÓÚáéíóúÑñ]+\.$/
console.log(regexOraciones.test('Son los juegos del hambre.'))
/* Números hexadecimales.​ ​ */
const regexHexadecimales = /^[A-F0-9]+$/
console.log(regexHexadecimales.test('2A'))
/* URL (https://www.campusvirtual.ulp.edu.ar/ o http://google.com.ar).​ */
const regexURL = /^(https?:\/\/)(www|google)\.(campusvirtual)?(\.ulp\.edu\.ar\/|com\.ar)$/
console.log(regexURL.test('https://www.campusvirtual.ulp.edu.ar/'))
console.log(regexURL.test('http://google.com.ar'))
/* Notación científica (9.11x10^-8 o 1.25x10^12).​ */
const regexNotCient = /^\d+\.?\d+\*\d+\^\-?\d+$/
console.log(regexNotCient.test('1.700*10^3'))
/* Formato Moneda (3.050.028,75$ o 1.000.000,50€).​ */
const regexMoneda = /^\d+\.\d+\.\d+\,?\d+(\$|US\$|€)@|$/
console.log(regexMoneda.test('45.092.050.028,10€'))
/* Patente de autos argentinos (antiguo o nuevo sistema).​ */
const regexPatente = /^[A-Z]{2,3}\s[0-9]{3}(\s[A-Z]{2})?$/
console.log(regexPatente.test('ABC 123'))
console.log(regexPatente.test('AB 123 CD'))
/* Fecha y hora (13/10/2025 19:13:03 GMT-0300). */
const regexFechaHora = /^\d{2}\/\d{2}\/\d{4}\s\d{2}\:\d{2}\:\d{2}\s(GMT|UTC)(\+|-)\d+$/
console.log(regexFechaHora.test('09/02/2025 13:02:53 UTC+1'))



