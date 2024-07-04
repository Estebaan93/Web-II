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

for(let i=0; i<3; i++){
  console.log(i);
}
