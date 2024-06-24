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

//Sintaxis de desectructuracion
console.log('Desectructuracion:')
const {saludar, saludarHolaMundo}= require ("./saludo.js");
console.log(saludarHolaMundo());
console.log(saludar(`Esteban`));
console.log('');
const note={
  id:1,
  title: 'Mi primera nota',
  anio: '01/04/2024',
}
//Creamos variables de la propiedad del objeto
const id= note.id;
const title= note.title;
const anio= note.anio;
console.log(`id: ${id}, title: ${title}, año: ${anio}`);
console.log(`note: ${note}`);
console.log(`${note.id}, ${note.title}, ${note.anio}`);
console.log('');

//Desectructuracion en iterables
console.log(`Desectructuracion en iterables:`);
const array=[1,2,3];
const [a,b,c]=array //desectructura el array en variables
console.log(a,b,c);

//Operador spread (propagador)
console.log('Un array mas poderoso:')
var partes=['hombros','rodillas'];
var todo=['cabeza',...partes,'cadera','pies'];
console.log(todo);

console.log('combinar 2 arreglos en una nueva estructura:');
var arr1=[0,1,2];
var arr2=[3,4,5];
var nuevoArray=[...arr1,...arr2];
console.log(`Imprimimos el nuevo array combinado: ${nuevoArray}`);
console.log('');

console.log('Propagacion de objetos - copias: ');
//Array de usuarios
const usuarios=[
  {id:1, nombre:'Ana'},
  {id:2, nombre:'Ben'},
]
console.log(usuarios);
for (i in usuarios) {
  console.log(`indice: ${i}-> id: ${usuarios[i].id}, nombre: ${usuarios[i].nombre}`);
}
console.log(`Agregamos un nuevo usuario`);
const newUsuario={id:3, nombre: "Juan"};
usuarios.push(newUsuario);
console.log('Imprimimos de nuevo', usuarios);

//Copia
const updateUsuarios=[...usuarios, newUsuario];
console.log('Imprimimos con el operador spread:', updateUsuarios);

console.log('Conversion a array:');
//Create set
const set=new Set();
set.add('Octopus');
set.add('Starlone');
set.add('Neverwhere');
console.log(`Tamaño del set(coleccion) ${set.size}`);
console.log('Imprimimos el set:',set);
console.log('Iterar sobre el set:');
set.forEach((datos)=>{
  console.log(datos);
});

console.log('Buscar en el set "Octopus": ',set.has("Octopus"));
console.log('');
console.log('Convertir set a array:');
const setCrear=[...set];
console.log(setCrear);
console.log('');
const string="Hola";
const stringArray=[...string];
console.log(stringArray);
console.log('');
console.log('Propagacion con objetos:');
const objeto1 = { a: 1, b: 2 };
const objeto2 = { ...objeto1, c: 3 };
console.log(objeto2); // Resultado: { a: 1, b: 2, c: 3 }
console.log('');
console.log('Parametros rest:');
function printName(name, ...fancyNames){
var fullName = name;
fancyNames.forEach(fancyN => fullName += ' ' + fancyN);
console.log(fullName);
};
printName('Felipe'); // Felipe
printName('Felipe', 'Juan', 'Froilan'); //Felipe Juan Froilan
console.log('');
console.log('Parametro rest con el operador spread:');
function combinarArrays(...arrays) {
  return arrays.reduce((resultado, array) => [...resultado, ...array], []);
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

console.log(combinarArrays(array1, array2, array3)); // Resultado: [1, 2, 3, 4, 5, 6, 7, 8, 9]


/*console.log('console log procesos:');
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
console.log(os.userInfo());*/

console.log('');
console.log('Modulo timers funciones asicronas');
console.log("setTimeout");
function sumar (a, b) {
  console.log(`funcion setTimeout suma en 5 segundos: ${a+b}`);
}
setTimeout(sumar, 5000, 4, 4);

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
