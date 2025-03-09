function cuadradoPromise(valor) {  // declaramos funcion recibe parametro valor, 
// sera asincronica devuelve una promise
    return new Promise((resolve, reject) => {  // crea una nueva promise, recibe función callback 2 paramet
        if (typeof valor !== "number") {  // verifica si NO es numero
            reject(`❌ Error: El valor "${valor}" no es un número.`); // ejecuta si hay error
        } else {
            setTimeout(() => {  // simula tiempo, retraso 
                resolve({ valor, resultado: valor * valor }); // se ejecuta si todo va bien
            }, Math.random() * 1000);
        }
    });
}

document.getElementById("ejecutar").addEventListener("click", () => { // se busca elemento en el documento
// y se agrega evento , cuanso se hace clcik se ejecuta funcion flecja
    let resultadoDiv = document.getElementById("resultado"); // busca elem con id resultado
    resultadoDiv.innerHTML = "<strong>Calculando...</strong>";

    cuadradoPromise(1)  /// se llama a la funcion se usa el then para manejar las respuestas
        .then((obj) => {
            resultadoDiv.innerHTML += `<p>✔️ Resultado: ${obj.valor}² = ${obj.resultado}</p>`;
            return cuadradoPromise(2);
        })
        .then((obj) => {
            resultadoDiv.innerHTML += `<p>✔️ Resultado: ${obj.valor}² = ${obj.resultado}</p>`;
            return cuadradoPromise(3);
        })
        .then((obj) => {
            resultadoDiv.innerHTML += `<p>✔️ Resultado: ${obj.valor}² = ${obj.resultado}</p>`;
            return cuadradoPromise(4); // se genera un error xq madamos el string
        })
        .then((obj) => {
            resultadoDiv.innerHTML += `<p>✔️ Resultado: ${obj.valor}² = ${obj.resultado}</p>`;
            return cuadradoPromise(5);
        })
        .then((obj) => {
            resultadoDiv.innerHTML += `<p>✔️ Resultado: ${obj.valor}² = ${obj.resultado}</p>`;
            resultadoDiv.innerHTML += "<p><strong>Fin del proceso.</strong></p>";
        })
        .catch((error) => {
            resultadoDiv.innerHTML += `<p style="color:red;">${error}</p>`;
        })
        .finally(() => {
            resultadoDiv.innerHTML += "<p><strong>Proceso finalizado.</strong></p>";
        });
});
