/* Haga un script que tenga una función que reciba un arreglo de números y retorne un
nuevo arreglo excluyendo los ceros (0). */
let arreglo = [];
for (let i = 0; i < 10; i++) {
  arreglo[i] = Math.floor(Math.random() * (2 - (-1)) + 0);
}

function miFuncion(arr) {
  let arreglo2 = [];
  for (let element of arr) {
    if (element != 0) 
        arreglo2.push(element)
  }
  return arreglo2
}

console.log(arreglo)
console.log('')
console.log(miFuncion(arreglo))
