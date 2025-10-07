/* Haga un script que tenga una función que reciba un arreglo de números (cada número
en el rango de 0 a 9) y retorne un nuevo arreglo convirtiendo cada número a su versión
en palabras. */

let arregloNumeros = [];
for (let i = 0; i < 10; i++) {
  arregloNumeros[i] = Math.floor(Math.random() * (10 - 0) + 0);
}
/* console.log(arreglo) */
const arregloNumerosStr = [
  "cero",
  "uno",
  "dos",
  "tres",
  "cuatro",
  "cinco",
  "seis",
  "siete",
  "ocho",
  "nueve",
];
function miFuncion(arr) {
  const arregloAux = [];
  for (const element of arregloNumeros) {
    switch (element) {
      case 0:
        arregloAux.push(arregloNumerosStr.at(0));
        break;
      case 1:
        arregloAux.push(arregloNumerosStr.at(1));
        break;
      case 2:
        arregloAux.push(arregloNumerosStr.at(2));
        break;
      case 3:
        arregloAux.push(arregloNumerosStr.at(3));
        break;
      case 4:
        arregloAux.push(arregloNumerosStr.at(4));
        break;
      case 5:
        arregloAux.push(arregloNumerosStr.at(5));
        break;
      case 6:
        arregloAux.push(arregloNumerosStr.at(6));
        break;
      case 7:
        arregloAux.push(arregloNumerosStr.at(7));
        break;
      case 8:
        arregloAux.push(arregloNumerosStr.at(8));
        break;
      case 9:
        arregloAux.push(arregloNumerosStr.at(9));
        break;
    }
  }
  return arregloAux;
}

console.log(arregloNumeros)
console.log(miFuncion(arregloNumeros))