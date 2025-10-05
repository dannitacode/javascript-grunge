/* Analice y repare el código para que se impriman todos los valores excepto los
números. */

/* Código a reparar:
var lista = new Array('a','b','c','1','x','9',’d’,’4);
var item ;
for (item in lista)
{
if (lista[item] == "1" or “9”) break;
console.log(lista[item]);
} */

/* Códgio reparado */
var lista = new Array("a", "b", "c", "1", "x", "9", "d", "4");
var item;
for (item in lista) {
  if (lista[item] != "1" && lista[item] != "9" && lista[item] != "4") {
    console.log(lista[item]);
  }
}
