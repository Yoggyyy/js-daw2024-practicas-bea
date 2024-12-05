let persona ={
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero",

    presentarse: function (){
        console.log(`Hola me llamo ${this.nombre} tengo ${this.edad} y me dedico a la profesion de ${this.profesion}`)
    }
};

persona.presentarse();
