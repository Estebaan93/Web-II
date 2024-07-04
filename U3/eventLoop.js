/* Cómo Funciona el Event Loop
Ejecutar Código Síncrono: Todo el código síncrono se ejecuta primero y las funciones se añaden a la Call Stack.

Operaciones Asíncronas: Cuando se encuentra una operación asíncrona (como setTimeout, fetch, etc.), 
se delega a las Web APIs.

Callback Queue: Una vez que una operación asíncrona se completa, su callback se envía a la Callback Queue.

Event Loop: El Event Loop monitorea continuamente el Call Stack y la Callback Queue. Si el Call Stack está vacío, 
el Event Loop toma la primera tarea de la Callback Queue y la empuja al Call Stack para su ejecución.*/

console.log('Inicio');

setTimeout(() => {
  console.log('Timeout 1');
}, 1000);

setTimeout(() => {
  console.log('Timeout 2');
}, 0);

console.log('Fin');
