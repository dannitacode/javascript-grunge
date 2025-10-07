/* Haga un script que tenga una función que de vuelta un string pasado por parámetro. */

const string = 'Panqueques'

function panquequero(str) {
    let arreglo = []
    for (let i = 0; i < str.length; i++) {
        arreglo.push(str.at(i))
    }
    return arreglo.reverse().join('')
}

console.log(panquequero(string))