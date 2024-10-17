/*
comprueba q una palabra es palindromo sin funciones
*/

const palabras = ["ana", "radar", "javascript", "reconocer", "oro", "palindromo", "salas"];
let palindromos = [];
for (let palabra of palabras) {
    let esPalindromo = true;

    for (let i in palabras) {
        if (palabra[i] !== palabra[palabra.length- 1 - i]) {
            esPalindromo = false;
            break;
        }
    }

    if (esPalindromo) {
        palindromos[palindromos.length] = palabra;
    }
}


console.log(palindromos);