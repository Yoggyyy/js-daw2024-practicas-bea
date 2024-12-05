let libro = {
    titulo: "Cien Anios de Soledad",
    autor: "Gabriel Garcia Marquez",
    paginas: 417,
    anoPublicacion: 1967
};

for(let libros in libro){
    console.log(`${libros},${libro[libros]}`);
}

