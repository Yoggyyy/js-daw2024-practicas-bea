/*
3. Crea dos arrays: uno llamado nombres que contenga 5 nombres de personas,
 y otro llamado edades que contenga
 las edades correspondientes a esos nombres (asegúrate de que la posición 
 del nombre coincida con la posición de la edad). 
 Recorre ambos arrays y genera un nuevo array llamado 
mayoresDeEdad que contenga los nombres de las personas 
que sean mayores o iguales a 18 años. Imprime el array mayoresDeEdad al final.
*/

let personas = ["JAVI","SANDRA","CELIA","CARLOS","DAVID"]
let edades = ["12","45","32","15","18"]
let mayoresDeEdad = [];
for(let i in edades){
    if(edades[i]>= 18){
        mayoresDeEdad[mayoresDeEdad.length] = personas[i];
    }
}