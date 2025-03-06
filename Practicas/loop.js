console.log("1️⃣ Inicio del programa"); //Se ejecuta inmediatamente

setTimeout(() => {
    console.log("2️⃣ Timeout de 0 ms"); // Se ejecuta después del stack coloca  callback en la Task Queue, 
    // pero NO se ejecuta de inmediato
}, 0);

Promise.resolve().then(() => {
    console.log("3️⃣ Promesa resuelta"); // Se ejecuta antes que setTimeout, 
    // Las promesas resueltas van a la Microtask Queue, que tiene mayor prioridad que la Task Queue, 
    // se ejecuta luego de que la Call Stack se vacie
});
console.log("4️⃣ Fin del programa"); // Se ejecuta inmediatamente porque esta en la Call Stack
