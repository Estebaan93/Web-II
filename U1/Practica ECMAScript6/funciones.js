/*Una funcion es un bloque de codigo, autocontenido que se puede definir una vez y ejecutar en cualquier momento. Opcionalmente una funcion puede aceptar parametros y devolver un valor*/

//Funcion declarada
function estoEsUnaFuncion(){
  console.log('Uno');
  console.log('Dos');
  console.log('Tres');
}

//Invocacion de la funcion
estoEsUnaFuncion();

console.log('----------------------------------------------------------------------------');

function unaFuncionQueDevuelveValor(){
  console.log('Uno');
  console.log('Dos');
  console.log('Tres');
  return 'La funcion ha retornado una cadena de texto';
}
let valorDeFuncion= unaFuncionQueDevuelveValor(); 
console.log(valorDeFuncion);

console.log('----------------------------------------------------------------------------');


function saludar(nombre,edad){
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}
saludar('Esteban',31);


console.log('----------------------------------------------------------------------------');

/*Parametros por defectos*/

function saludar2(nombre='Desconocido', edad=0){
  return `Hola mi nombre es ${nombre}, y tengo ${edad} años`;
}

const saludarr2=saludar2();
console.log(saludarr2);

console.log('----------------------------------------------------------------------------');

//Funciones declaradas vs funciones expresadas
/*Al ser JS un lenguaje interpretado, no necesita una fase de compilacion es decir en la misma ejecucion va compilando o interpretando el codigo*/

funcionDeclarada();

function funcionDeclarada(){
  console.log('Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada');
}
console.log('----------------------------------------------------------------------------');

//Funcion anonima
const funcionExpresada= function(){
  console.log('Esto es una funcion expresada, una funcion que se le ha asignado como valor a una variable. Solo puede ser llamada despues de su creacion');
}
funcionExpresada();

console.log('----------------------------------------------------------------------------');



console.log('----------------------------------------------------------------------------');
