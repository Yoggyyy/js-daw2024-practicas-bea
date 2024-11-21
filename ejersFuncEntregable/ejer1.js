/*
Crea una aplicación web que pida al usuario palabras continuamente 
hasta que el popup se deje vacío o se cancele. 

A continuación, se eliminarán todas las palabras repetidas y además 
se ordenarán en español, pero en orden inverso (de la Z a la A) y 
se mostrará el resultado por pantalla. 

Utilizar funciones flecha si se considera apropiado. 

Ayuda: cancelar el popup devuelve null. 
*/
const procesarPalabras = (palabras) => { 
    // Eliminar palabras duplicadas 
    let palabrasUnicas = [...new Set(palabras)]; 
    
    // Ordenar palabras en orden inverso (de la Z a la A) 
    palabrasUnicas.sort((a, b) => 
        b.localeCompare(a, 'es', { sensitivity: 'base' }));
    
    return palabrasUnicas; 
};

// Modifica la función para procesar y mostrar palabras correctamente
const mostrarResultadosProcesados = (palabras) => {
    let palabrasProcesadas = procesarPalabras(palabras);
    mostrarResultados(palabrasProcesadas);
};

// Llama a la función 'mostrarResultadosProcesados' 
window.onload = function() {
    let palabras = pedirPalabras();
    mostrarResultadosProcesados(palabras);
};
