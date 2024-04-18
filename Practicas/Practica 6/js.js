console.log("Tipado dinamico:");
let variable; //Sin declarar el tipo
console.log(typeof variable);
variable=10; // tipo number
console.log(typeof variable); // salida number

variable="Hola"; // tipo string
console.log(typeof variable); // salida string
console.log("");

console.log("Tipado debil:");
let x1 = "5";
let y1 = 2;
let resultado1 = x1 + y1;
console.log(resultado1); // Output: "52"

console.log("");
console.log("Valores truthy y falsy.");
if("0"){
  console.log("Verdadero");
 }else{
  console.log("Falso");
}

console.log('');
console.log('Export funciones');
const saludo=require("./saludo.js");
console.log(saludo.saludar("Esteban"));
console.log(saludo.saludarHolaMundo());
console.log('');

//Sintexis de desectructuracion
const {saludar, saludarHolaMundo}= require ("./saludo.js");
console.log(saludarHolaMundo());
console.log(saludar(`Esteban`));
console.log('');
console.log('console log procesos:');
//console.log(process);
console.log(process.argv);
//node js.js 6 7;
console.log(process.memoryUsage());

console.log('');
console.log('Modulo os');
const os= require('os');
console.log(os.type());
console.log(os.homedir());
console.log(os.uptime());
console.log(os.userInfo());

console.log('');
console.log('Modulo timers funciones asicronas');
console.log("setTimeout");
function sumar (a, b) {
  console.log(a+b);
}
setTimeout(sumar, 5000, 5, 4);

console.log('');
console.log('Funcion setImmediate');
function aprendiendo (tema) {
  console.log(`Estoy aprendiendo ${tema}`); 
}

console.log('antes de setImmediate()');
//setImmediate(aprendiendo,'Node.js');
console.log('Despues de setImmediate()');
console.log('');

console.log('Modulo fs');
const fs= require('fs');

/*fs.readFile('inde.html', 'utf-8', (error, contenido)=>{
  if(error){
    throw error;
  } 
   console.log(contenido);   
});*/

//Cambiar nombre
/*console.log('Cambiar nombre');
fs.rename('index1.html', 'main.html', (error)=> {
  if(error){
    throw error;
  }
  console.log('Nombre cambiado');
});*/

console.log('AppenFile');
//Agrega contenido al final del archivo
fs.appendFile ('main.html', '<p>Hola</p>', (error)=> {
  if (error) {
    throw error;
  }
  console.log('Archivo actualizado');
});

console.log('');
console.log('Reemplazar el contenido del archivo');
fs.writeFile ('main.html', 'Contenido nuevo', (error)=>{
  if(error){
    throw error;
  }
  console.log('Contenido reemplazado');
})
console.log('');
console.log('Eliminar contenido');
/*fs.unlink('main.html', (error)=> {
  if(error){
    throw error;
  }
  console.log('Archivo eliminado');
});*/
//PARA QUE ESTAS FUNCIONES SEAN SINCRONICAS HAY QUE PONER SYNC AL FINAL
//DEL NOMBRE DE LA FUNCION
//fs.writeFileSync('main.html', 'Contenido modificado');