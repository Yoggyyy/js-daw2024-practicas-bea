function pedirPalabras() {
    let palabras = [];
    while (true) {
        let palabra = prompt("Introduce una palabra (deja en blanco para terminar):");
        if (palabra === null || palabra === "") {
            break;
        }
        palabras.push(palabra);
    }
    return palabras;
}

function mostrarResultados(palabras) {
    let resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "<h2>Palabras introducidas:</h2><ul>";
    for (let palabra of palabras) {
        resultadosDiv.innerHTML += "<li>" + palabra + "</li>";
    }
    resultadosDiv.innerHTML += "</ul>";
}
