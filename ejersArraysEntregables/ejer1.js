/*
1.Mostrar por consola 50 combinaciones aleatorias de la lotería primitiva.
Las combinaciones son 6 números del 1 al 49, pero debe tenerse en cuenta 
que no se pueden repetir los números en una misma combinación.
*/

// Función para generar una combinación de 6 números únicos entre 1 y 49
function generarCombinacion() {
    let combinacion = new Set();
    while (combinacion.size < 6) {
        // Genero un número aleatorio entre 1 y 49
        let numero = Math.floor(Math.random() * 49) + 1;
        // Añado el número al conjunto, evitando duplicados
        combinacion.add(numero); 
    }
    // Converto el conjunto a un array para facilidad de uso
    return Array.from(combinacion); 
}

// Generar y mostrar 50 combinaciones
for (let i = 0; i < 50; i++) {
    console.log(`Combinación ${i + 1}: ${generarCombinacion().join(", ")}`);
}
