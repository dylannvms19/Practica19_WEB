class Persona{
    
    #generarId(){
        return Math.floor(Math.random()*1000);
    }

    constructor(nombre = "", edad = 0){
        this.nombre = nombre;
        this.edad = edad;
        this.id = this.#generarId;
    }
    saludar(){
        return `Hola, soy ${this.nombre}`;
    }
}


class Estudiante extends Persona{
    constructor(){
        super();
        this.carrera = "";
    }

    estudiar(){
        return `${this.nombre} está estudiando`;
    }
}

