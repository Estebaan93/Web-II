// asincronismo con setTimeout
console.log("Inicio");

function tareaAsincronica() {
    setTimeout(() => {
        console.log("Tarea asincrónica completada");
    }, 2000); // Se ejecuta despues de 2 segundos
}

tareaAsincronica();

console.log("Fin");


// con callback // es util, pero puede volverse complicado si hay muchas llamadas anidadas OJO

function tareaAsincronica(callback) { // se eejecuta
    setTimeout(() => {
        console.log("Tarea asincrónica completada");
        callback(); // Llamamos a la función callback despues de que termine el timeout
    }, 2000);
}

tareaAsincronica(() => {
    console.log("Callback ejecutado");
});


/// con promesas  // el codigo sea mas estructurado y facil de manejar que los callbacks.

let promesa = new Promise((resolve, reject) => { // se crea promise
    setTimeout(() => { // luego de 2 seg se resuelve promise
        resolve("Promesa completada");
    }, 2000);
});

promesa.then(mensaje => {
    console.log(mensaje);
});


// con asynt/await  // el codigo se vea mas sincronico y facil de entender.

async function tareaAsincronica() {
    return "Resultado de la tarea";
}

async function ejecutar() {
    console.log("Inicio");
    let resultado = await tareaAsincronica(); //  await tareaAsincronica() espera a que devuelva un resultado
    console.log(resultado);  // valor se guarda en resultado
    console.log("Fin");
}

ejecutar();
