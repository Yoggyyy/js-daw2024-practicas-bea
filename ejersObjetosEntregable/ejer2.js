/*
Los objetos de tipo Array (en definitiva, los arrays) poseen numerosos métodos que resultan
muy útiles. Esta práctica consiste en añadir un método a todos los arrays para el cálculo de
la media aritmética de sus elementos. Modificar el prototipo de los arrays para añadir el
llamado método.
Hace falta utilizar el método reduce() de los Arrays.
Añadir código que valide/pruebe el funcionamiento de los requisitos.
*/

Array.prototype.mediaAritmetica = function(){
    let total = this.reduce((a, b) => a + b, 0);
    media = total / this.length
    return media;
}

let num = [1,2,3,45,5,6,87];

console.log(num.mediaAritmetica()); 
