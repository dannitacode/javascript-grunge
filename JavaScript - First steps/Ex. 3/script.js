/* Haz un script que escriba 50 números aleatorios enteros entre 1 y 6. Usar el método
random de la clase Math. */

for (let i = 1; i <= 50; i++) {
    console.log(`Numero ${i}: ${Math.floor(Math.random() * (6 - 1 + 1) + 1)}`)
}
