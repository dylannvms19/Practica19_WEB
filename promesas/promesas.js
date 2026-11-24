function obtenerDatos() {
    //Tiene tres estados: pending, resolve y rejected
    return new Promise((resolve, reject)=>{
        console.log("[obtenerDatos]Iniciando obtención de datos.")
        setTimeout(()=>{
            let exito = true;
            if(exito){
                resolve("Datos obtenidos correctamente.");
            } else {
                reject("Error al obtener los datos.");
            }
        },2000);
    });
}


//Consumo básico de promesas con .then y .catch()

console.log("Iniciando consumo de promesas.");
obtenerDatos()
    .then((resultado)=>{
        console.log("Resultado obtenido: "+ resultado);
    })
    .catch((error)=>{
        console.log("Error " + error)
    })


function buscarUsuario(){
    return new Promise((resolver, reject)=>{
        setTimeout(()=>{
            let exito = true;

            if(exito){
                let usuario = {
                    nombre : ana,
                    edad : 26
                };

                resolve(usuario);
            } else{
                reject("No se pudo obtener el usuario.");
            }
        }, 4000);
    })
}

console.log("buscarUsuario con encadenamiento")

buscarUsuario()
    .then(usuario =>{
        console.log("Usuario encontrado: "+ usaurio);
        //Retornar un valor aqui lo pasa al siguiente .then
        return usuario.nombre.toUpperCase();
    })
    .then(nombreMayuscula => {
        console.log("Procesando nombre: " + nombreMayuscula);
    })
    .catch(error => {
        console.log("Error: "+ error)
    })
    .finally(error => {
        console.log("Fin de flujo")
    })
    


