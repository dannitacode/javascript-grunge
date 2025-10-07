/* Haga un script que tenga una función que dado un texto y una query, retorne todas las
palabras que incluyen la query. */
const string = 'Panqueques con dulce de la dulceria de Pancho'
const query = 'dul'

function panqueques(str) {
    let arreglo = []
    const aux = str.split(' ')
    for (let i = 0; i < aux.length; i++) {
        if (aux[i].includes(query)) {
            arreglo.push(aux.at(i))
        }
    }
    return arreglo
}

console.log(panqueques(string))