/* Haga un script que tenga una función que reciba un string y capitalice la primera letra. */

let string = "panqueques"
function miFuncion(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
console.log(miFuncion(string))