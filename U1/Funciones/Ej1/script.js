//DECLARACION DE FUNCION

function sayHi(parametro){
  return parametro;
}
const argumento='Hola';
sayHi(argumento);

//Devuelve el valor minimo
function min(a,b){
  return (a<b) ? a : b
}

console.log('Minimo: ',min(2,4));


//Funcion para elevar
function elevar(a,b){
  return Math.pow(a,b);
}
console.log('Elevado: ',elevar(2,3));


// Declaración de Función
function sum1(a, b) {
  return a + b;
}
console.log('Suma: ',sum1(2,1));



// Expresión de Función
let sum2 = function(a, b) {
  return a + b;
};
console.log('Suma: ',sum2(2,4));


//CALLBACK funcion que se pasa como argumento a otra
function tarea(callback) {
  console.log("Realizando tarea...");
  callback(); // Ejecuta la función que se pasó como argumento
}
function finalizado() {
  console.log("Tarea completada.");
}
tarea(finalizado);

//Con tareas asicronas
function saludo(){
  console.log("hola despues de 2 segundos");
}
setTimeout(saludo,2000);



//Dentro del bloque
/*let age = prompt("Cuál es tu edad?", 18);
let welcome;
if (age < 18) {
  welcome = function() {
    alert("Eres menor!");
  };
} else {
  welcome = function() {
    alert("Eres mayor!");
  };
}
welcome(); // ahora ok*/

let age = prompt("¿Cuál es tu edad?", 18);
let welcome = (age < 18) ?
  function() { alert("Eres menor!"); } :
  function() { alert("¡Eres mayor!"); };

welcome(); // ahora es visible


//FUNCIONES FLECHAS ARROW
let sumaFlecha=(a,b)=>a+b;
console.log(`Suma funcion flecha: ${sumaFlecha(2,8)}`);

let doble=n=>n*2;
console.log(`Doble: ${doble(3)}`);

//Si no hay parametros, los parentesis estaran vacios pero igual deben estar
let sinParametros=()=>console.log("Sin parametros")
sinParametros();

//Expresion de funciones flechas
let edad= prompt("Que edad tienes?", 18);
let bienvenido= (edad<18) ? ()=> console.log("Eres menor") : ()=> console.log("Eres mayor");
bienvenido();


//Funciones flechas multilinea
let sumaMultilinea= (a,b)=>{
  let resultado= a+b;
  return resultado; //Si usamos llaves entonces necesitamos return
}
console.log(sumaMultilinea(1,7));

//EJ
function func(pregunta, yes, no){
  if(confirm(pregunta)) yes();
  else no();
}
func(
  "Seguro funcion flecha?",
  ()=> alert("Ejecutando"),
  ()=> alert("Cancelaste la ejecucion")
);


let promise = new Promise(function(resolve, reject) {
  // la función se ejecuta automáticamente cuando se construye la promesa

  // después de 1 segundo, indica que la tarea está hecha con el resultado "hecho"
  setTimeout(() => resolve("hecho"), 1000);
});

promise.then(
  result=>console.log(result),
  error=>console.log(error));