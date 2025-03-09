// Función que devuelve una promesa para calcular el cuadrado de un número
function cuadradoPromise(valor) {
    if (typeof valor !== "number") {
        return Promise.reject(`❌ Error: El valor "${valor}" no es un número.`);
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ valor, resultado: valor * valor });
        }, Math.random() * 1000);
    });
}

// Función asíncrona para calcular cuadrados
async function calcularCuadrados() {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<strong>Calculando cuadrados...</strong>";

    try {
        let obj1 = await cuadradoPromise(2);
        let obj2 = await cuadradoPromise(4);
        let obj3 = await cuadradoPromise(6);
        let obj4 = await cuadradoPromise(8); // Error aquí
        let obj5 = await cuadradoPromise(10);

        resultadoDiv.innerHTML = `
            ✅ Cuadrado de ${obj1.valor}: ${obj1.resultado} <br>
            ✅ Cuadrado de ${obj2.valor}: ${obj2.resultado} <br>
            ✅ Cuadrado de ${obj3.valor}: ${obj3.resultado} <br>
            ✅ Cuadrado de ${obj4.valor}: ${obj4.resultado} <br>
            ✅ Cuadrado de ${obj5.valor}: ${obj5.resultado}
        `;
    } catch (error) {
        resultadoDiv.innerHTML = `<span style="color:red;">${error}</span>`;
    }
}

// Evento para ejecutar la función cuando se haga clic en el botón
document.getElementById("calcular").addEventListener("click", calcularCuadrados);

// pro
document.getElementById("calcular").addEventListener("click", calcularCuadrados);

async function calcularCuadrados() {
try {
console.log("🔄 Calculando cuadrados...");

let obj1 = await cuadradoPromise(2);
console.log(`✅ Cuadrado de ${obj1.valor}: ${obj1.resultado}`);

let obj2 = await cuadradoPromise(4);
console.log(`✅ Cuadrado de ${obj2.valor}: ${obj2.resultado}`);

let obj3 = await cuadradoPromise(6);
console.log(`✅ Cuadrado de ${obj3.valor}: ${obj3.resultado}`);

let obj4 = await cuadradoPromise(8);
console.log(`✅ Cuadrado de ${obj4.valor}: ${obj4.resultado}`);

let obj5 = await cuadradoPromise(10); // Este lanzará un error
console.log(`✅ Cuadrado de ${obj5.valor}: ${obj5.resultado}`);

} catch (error) {
console.error(`❌ ${error}`);
}
}

// Llamar la función en la consola
calcularCuadrados();
