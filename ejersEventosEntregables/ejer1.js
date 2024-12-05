// Array con las imágenes
const imagenes = [
    'images/fondo1.jpeg',
    'images/fondo2.jpeg',
    'images/fondo3.jpeg',
];

// Variable para almacenar el índice actual
let indiceActual = -1;

document.addEventListener('keydown', function(event) {
    if (event.altKey && event.code === 'F12') {
        const imagenDiv = document.getElementById('imagen');

        // Incrementar el índice en el bucle
        indiceActual = (indiceActual + 1) % imagenes.length;

        // Cambiar la imagen de fondo
        imagenDiv.style.backgroundImage = `url('${imagenes[indiceActual]}')`;

        // Ocultar el texto después del primer cambio
        if (indiceActual === 0) {
            imagenDiv.querySelector('h1').style.display = 'none';
        }
    }
});