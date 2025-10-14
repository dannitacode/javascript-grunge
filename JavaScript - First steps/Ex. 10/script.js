/* Haga un script que dado una fecha diga cuántos días faltan o ya pasaron respecto del
día de hoy. */
const fecha1 = new Date('1630-03-10')
const fecha2 = new Date('2025-03-10')
const año1 = fecha1.getFullYear()
const año2 = fecha2.getFullYear()
console.log(`Desde 1630 han pasado ${(año2 - año1) * 365} dias.`)