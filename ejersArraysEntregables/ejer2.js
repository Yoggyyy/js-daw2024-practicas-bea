/*
Se desea validar hasta qué punto la función Math.random es realmente aleatoria. 
Para tal fin, calcularemos 10.000 veces números aleatorios del 1 al 10. 
Por consola mostraremos cada número del 1 al 10 y a continuación el número de veces 
que ha salido ese número. Por ejemplo:
Frecuencias
Número 1: 1016
Número 2: 1019
Número 3: 1059
....
Número 10: 993
*/

// Creo un objeto para almacenar las frecuencias de cada número del 1 al 10
let frecuencias = {
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
    6: 0, 7: 0, 8: 0, 9: 0, 10: 0
};

// Realizo 10,000 simulaciones
for (let i = 0; i < 10000; i++) {
    // Genero un número aleatorio entre 1 y 10
    let numero = Math.floor(Math.random() * 10) + 1;
    frecuencias[numero]++; // Incrementamos la cuenta del número generado
}

// Muestro las frecuencias de cada número
console.log("Frecuencias:");
for (let numero = 1; numero <= 10; numero++) {
    console.log(`Número ${numero}: ${frecuencias[numero]}`);
}
