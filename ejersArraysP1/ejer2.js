/*
Crea un array llamado paises que contenga: "España", "Francia", 
"Alemania", "Italia". Recorre el array e imprime el nombre de cada país. 
Después, elimina el primer país del array y vuelve a recorrerlo e imprimir el array de nuevo.
*/

let paises = ["España","Francia","Alemania","Italia"]

console.log('ANTES:');
for (let i in paises) {
  console.log(paises[i]);
}

delete paises[0];
console.log('DESPUES:');
for (let i in paises) {
    console.log(paises[i]);
}