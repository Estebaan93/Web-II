//CLOSURE
{//Las variables locales no deberian verse afuera de este bloque
  let mensaje="Hola"; //Solo visible en este bloque
  console.log(mensaje);
  
};

//console.log(mensaje); //EROR
console.log("--------------------");

//Lo mismo sucede con un bloque if, for, while etc
if(true){
  let hola="Hello";
  console.log(hola);
}
console.log("");
console.log("--------------------");
console.log("Bloque for: ");
for(let i=0; i<3; i++){
  console.log(i);
}

console.log("--------------------");


//Funciones anidadas
function obtenerNombre(nombre, apellido){
  //Funcion auxiliar para usar a continuacion
  function nombreApellido(){
    return nombre +" "+ apellido;
  }
  console.log("Hola "+nombreApellido());
  console.log("Adios "+nombreApellido());
}
//Llamar a la funcion
obtenerNombre("Esteban", "Moreira");
console.log("--------------------");


console.log("");

//Otro ejemplo

function contador(){
  let conteo=0;
  return function(){
    return conteo++;
  };
}
let contar= contador();

console.log("Llamamos a la funciones: ");
console.log(contar());
console.log(contar());
console.log(contar());
console.log("--------------------");

//Ejemplo
let saludo="Hola";

function di(nombre){
  return `${saludo}, ${nombre}`; //Reconoce el ambito externo
}
console.log(di("Esteban"));
console.log("--------------------");
console.log("");

//Recolector de basura
console.log('Recolector de basura:');
function f(){
  let valor=123;
  return function(){
    return valor;
  }
}

let g= f();
console.log(g());
g=null;
console.log(g); //Ahora esta vacio

console.log("--------------------");

console.log("3 funciones de array");
function mate(){
  let valor= Math.random();

  return function(){
    return valor;
  };
}
//3 funciones de array
let arr= [mate(), mate(), mate()];

console.log(arr);
console.log("");

arr.forEach((data, indice)=>{
  console.log(`Elemento ${indice+1}: ${data()}`);
});

console.log("-------------------------------------------------------");
console.log("MAS PRUEBAS:");

let name="Esteban";

function diHola(){
  console.log("Hola "+ name);
}

name="Peter";

diHola();
console.log("-------------------------------------------------------");
console.log("");

console.log("SUMA CLAUSURAS:");
const suma= a=> b=> a+b;
console.log(suma(3)(2));
