//con callback prueba 1
function operacion1(callback) {  //no recibe datos
    setTimeout(() => {
        console.log(" Operación 1 completada");
        callback("Resultado 1");//llamamos a callback resultado 1
    }, 1000);
}

function operacion2(dato, callback) { // recibe dato que es la operacion 1 
    setTimeout(() => {
        console.log(` Operación 2 recibió: ${dato}`);
        callback("Resultado 2");//llamamos a callback resultado2
    }, 1000);
}

function operacion3(dato, callback) {      // recibe dato que es la operacion 2 
    setTimeout(() => {
        console.log(` Operación 3 recibió: ${dato}`);
        callback("Resultado 3");//llamamos a callback resultado3
    }, 1000);
}

    console.log("callback:")
// Callback Hell SE ANIDA , CREADON PIRAMIDE Y HACE Q NO SEA COMPRENDIDO
operacion1((res1) => {
    operacion2(res1, (res2) => {
        operacion3(res2, (res3) => {
            console.log(" Proceso finalizado:", res3);
        });
    });
});

//con promesas prueba 2
function operacion1p() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(" Operación 1 completada");
            resolve("Resultado 1");    // Pasamos "Resultado 1" a la siguiente promesa
        }, 1000);
    });
}

function operacion2p(dato) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(` Operación 2 recibió: ${dato}`);
            resolve("Resultado 2");
        }, 1000);
    });
}

function operacion3p(dato) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(` Operación 3 recibió: ${dato}`);
            resolve("Resultado 3");
        }, 1000);
    });
}

// Usando Promesas para evitar Callback Hell ejecutar con promesas
operacion1p()   //then() permite encadenar promesas fácilmente.
    .then(res1 => operacion2p(res1))
    .then(res2 => operacion3p(res2))
    .then(res3 => console.log(" Proceso finalizado:", res3))
    .catch(error => console.error("❌ Error:", error));




/// usando async/await ejecutar con promesas comentar linea 61-66
    console.log("Async await:")
    async function ejecutarOperaciones() {
        try {
            let res1 = await operacion1p(); // res1 = "Resultado 1"
            let res2 = await operacion2p(res1); // res2 = "Resultado 2"
            let res3 = await operacion3p(res2); // res3 = "Resultado 3"
            console.log(" Proceso finalizado:", res3);
        } catch (error) {
            console.error("❌ Error:", error);
        }
    }
    
    ejecutarOperaciones();
    