/*
1. Crea un array llamado colores usando const y añade tres 
colores: "rojo", "verde", "azul". 
Luego, intenta modificar un color específico del array. 
Imprime el array completo antes y después del cambio.
*/

const colores = ["rojo", "verde", "azul"];

console.log('Antes:');
for (let i in colores) {
  console.log(colores[i]);
}

colores[1] = "azul";
console.log('DESPUES:');
for (let i in colores) {
    console.log(colores[i]);
}
