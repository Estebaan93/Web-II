// Exporta varias funciones con nombres específicos
/*export function sumar(a, b) {
    return a + b;
}

export function restar(a, b) {
    return a - b;
}

export const PI = 3.1416;


// Importamos funciones específicas del módulo 'math.js'
import { sumar, restar, PI } from './math.js';

console.log(sumar(4, 5));  // 9
console.log(restar(10, 3)); // 7
console.log(PI); // 3.1416*/



// Exportamos una función como default  ( en archivo saludo.js)
export default function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

// Podemos importar con cualquier nombre (en archivo main.js)
import saludar from './saludo.js';

console.log(saludar('Juan')); // Hola, Juan!


//todo el modulo 
export function sumar(a, b) {
    return a + b;
}

export function restar(a, b) {
    return a - b;
}

export const PI = 3.1416;



// Importamos todo el módulo bajo el alias "MathModule"
import * as MathModule from './math.js';

console.log(MathModule.sumar(2, 3)); // 5
console.log(MathModule.restar(7, 4)); // 3
console.log(MathModule.PI); // 3.1416
