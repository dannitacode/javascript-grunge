/* Haga un script que tenga una función que reciba un string y capitalice la primera letra
de cada palabra. */
let string = "panqueque con manteca"
function miFuncion(str) {
    let uno = str.charAt(0).toUpperCase() + str.slice(1,9)
    let dos = str.charAt(10).toUpperCase() + str.slice(11,13)
    let tres = str.charAt(14).toUpperCase() + str.slice(15)
    return uno + ' ' + dos + ' ' + tres
}
console.log(miFuncion(string))