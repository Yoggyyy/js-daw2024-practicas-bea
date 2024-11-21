/*
Crea una aplicación web que pida al usuario palabras
 continuamente hasta que el popup se deje vacío o se cancele. 

Crear una función que recibirá todas las palabras 
y devolverá un mapa que contenga como clave cada palabra
 y cuyo valor será el número de veces que aparece esa 
 palabra en el array. Mostrar los resultados por pantalla. 

Ayuda: Como en las 2 prácticas se pide introducir las palabras 
y devolver el resultado de la misma forma, podéis sacar esa parte 
del código a un script común que utilicen las 2 prácticas (main.js). 
*/

// Función para contar la frecuencia de las palabras 
function contarPalabras(palabras) { 
    let mapaPalabras = new Map(); 
    for (let palabra of palabras) { 
        if (mapaPalabras.has(palabra)) { 
            mapaPalabras.set(palabra, mapaPalabras.get(palabra) + 1);
         } else { 
            mapaPalabras.set(palabra, 1); 
        } 
    } 
    return mapaPalabras; 
}