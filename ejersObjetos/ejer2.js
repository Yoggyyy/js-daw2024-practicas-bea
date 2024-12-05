let persona ={
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero",

    cumplirAnios: function (){
        this.edad++;
        console.log(` Mi edad actual es: ${this.edad}´`);
    }
};

persona.cumplirAnios();