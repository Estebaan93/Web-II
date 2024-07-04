// Ejemplos de Funcionalidades Introducidas en ECMAScript 6 (ES6)
// 1. Variables const y let
// const: Define una constante que no puede ser reasignada.
// let: Define una variable con alcance de bloque.
// javascript
// Copiar código
const PI = 3.1416;
let radius = 5;
if (radius > 0) {
  let circumference = 2 * PI * radius;
    console.log(circumference); // Imprime: 31.416
  }
console.log(radius); // Imprime: 5
// 2. Funciones Flecha (Arrow Functions)
// Sintaxis más concisa: (param1, param2) => expresión
// javascript
// Copiar código
const add = (a, b) => a + b;
console.log(add(2, 3)); // Imprime: 5
// 3. Parámetros por Defecto y Rest
// Parámetros por Defecto: Asigna valores por defecto a los parámetros de funciones.
// Rest: Agrupa múltiples argumentos en un solo parámetro.
// javascript
// Copiar código
function greet(name = 'Amigo') {
  console.log(`Hola, ${name}`);
}
greet(); // Imprime: Hola, Amigo
greet('Carlos'); // Imprime: Hola, Carlos

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Imprime: 10
// 4. Clases y Herencia
// Definición de Clases: Nueva sintaxis para definir clases y heredar propiedades y métodos.
// javascript
// Copiar código
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

class Estudiante extends Persona {
  constructor(nombre, curso) {
    super(nombre);
    this.curso = curso;
  }
  estudiar() {
    console.log(`${this.nombre} está estudiando ${this.curso}`);
  }
}

const estudiante = new Estudiante('Juan', 'Matemáticas');
estudiante.saludar(); // Imprime: Hola, soy Juan
estudiante.estudiar(); // Imprime: Juan está estudiando Matemáticas
// 5. Módulos
// Importar y Exportar: Soporte nativo para módulos.
// javascript
// Copiar código
// archivo math.js
// export const PI = 3.1416;
// export function sumar(a, b) {
//   return a + b;
// }

// archivo main.js
// import { PI, sumar } from './math.js';
// console.log(PI); // Imprime: 3.1416
// console.log(sumar(2, 3)); // Imprime: 5
// 6. Operador de Propagación (Spread Operator)
// Manipulación de Arrays y Objetos: Facilita la manipulación de arrays y objetos.
// javascript
// Copiar código
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // Imprime: [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // Imprime: { a: 1, b: 2, c: 3 }
// 7. Destructuración
// Extraer valores de Arrays y Objetos: Extrae valores de arrays y objetos de manera concisa.
// javascript
// Copiar código
const [x, y] = [1, 2];
console.log(x, y); // Imprime: 1 2

const { a, b } = { a: 3, b: 4 };
console.log(a, b); // Imprime: 3 4
// 8. Literales de Plantilla (Template Literals)
// Manejo de Strings con Interpolación y Multilínea: Nueva forma de manejar strings.
// javascript
// Copiar código
const nombre = 'Carlos';
const mensaje = `Hola, ${nombre}. 
¿Cómo estás?`;
console.log(mensaje);
// Imprime: 
// Hola, Carlos. 
// ¿Cómo estás?
// 9. Mapas y Sets
// Colecciones de Datos: Nuevas estructuras de datos para almacenar pares clave-valor y valores únicos.
// javascript
// Copiar código
let mapa = new Map();
mapa.set('nombre', 'Juan');
console.log(mapa.get('nombre')); // Imprime: Juan

let conjunto = new Set([1, 2, 3, 3, 4]);
console.log(conjunto); // Imprime: Set { 1, 2, 3, 4 }
// 10. Promesas (Promises)
// Manejo de Operaciones Asíncronas: Más manejable con métodos .then() y .catch().
// javascript
// Copiar código

console.log('PROMESAS')
let promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Éxito'), 1000);
});

promesa.then(result => {
    console.log(result); // Imprime: Éxito
  }).catch(error => {
    console.error(error);
  });

  // 11. Métodos de Object y Array
  // Manipulación y Iteración de Objetos y Arrays: Nuevos métodos.
  // javascript
  // Copiar código
  let obj = { a: 1, b: 2 };
  let copia = Object.assign({}, obj);
console.log(copia); // Imprime: { a: 1, b: 2 }

let arr = Array.from('Hola');
console.log(arr); // Imprime: ['H', 'o', 'l', 'a']
// 12. Métodos de String y Number
// Nuevas Funcionalidades: Métodos para manejo de strings y números.
// javascript
// Copiar código
console.log('Hola'.startsWith('Ho')); // Imprime: true
console.log(Number.isInteger(4.5)); // Imprime: false
// 13. Métodos Matemáticos
// Operaciones Matemáticas Avanzadas: Funciones adicionales.
// javascript
// Copiar código
console.log(Math.cbrt(27)); // Imprime: 3
console.log(Math.hypot(3, 4)); // Imprime: 5
// Estos ejemplos ilustran cómo las nuevas características de ES6 mejoran la legibilidad, mantenibilidad y funcionalidad del código JavaScript.
console.log('');


// La palabra clave async se utiliza para declarar una función asíncrona.
// Una función async siempre devuelve una promesa.
//Maneja tareas asincronicas
console.log('PROMESAS')
const promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('¡Hecho!');
  }, 1000);
});

promesa1
  .then(resultado => {
    console.log(resultado); // ¡Hecho!
  })
  .catch(error => {
    console.error(error);
  });

  // Declarando una función asincrónica
async function fetchData() {
  try {
    // Esperando la resolución de una promesa
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();


//Multiples promesas
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function ejecutar() {
  console.log('Inicio');
  
  await esperar(1000);
  console.log('Esperó 1 segundo');
  
  await esperar(2000);
  console.log('Esperó 2 segundos más');
  
  console.log('Fin');
}

ejecutar();


//Manejo de errores
async function fetchData() {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!respuesta.ok) {
      throw new Error('Network response was not ok');
    }
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();


//Multiples promesas concurrentes
async function ejecutarConcurrentemente() {
  const promesas = [
    fetch('https://jsonplaceholder.typicode.com/todos/1'),
    fetch('https://jsonplaceholder.typicode.com/todos/2')
  ];

  try {
    const respuestas = await Promise.all(promesas);
    const datos = await Promise.all(respuestas.map(res => res.json()));
    console.log(datos);
  } catch (error) {
    console.error('Error:', error);
  }
}

ejecutarConcurrentemente();
