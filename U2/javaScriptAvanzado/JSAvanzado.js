//JS avanzado
//JavaScript functions 4 ways

//Function declaration
function square(x){
  return x*x;
}
console.log("Funcion normal: ",square(2));

console.log("------------------------------------------------------");

//Function Expression
const square2=function(x){
  return x*x;
}
console.log("Funcion expresion: ",square2(4));

console.log("------------------------------------------------------");

//Arrow function Expression
const square3= (x)=>{
  return x*x;
}
console.log("Funcion flecha: ",square3(3));

console.log("------------------------------------------------------");

//Concise Arrow Function Expression
const square4= x=> x*x;
console.log("Funcion flecha concisa: ",square4(5));


console.log("");

//CONTEXTOS DE EJECUCION - GLOBAL

console.log("CONTEXTO DE EJECUCUON");


// Variable global definida fuera de cualquier función
var globalVariable = 'Soy global';

// Contexto de Ejecución Global (GEC)
function funcionGlobal() {
    // Accediendo a la variable global desde una función
    console.log(globalVariable);
}
funcionGlobal(); // Salida: Soy global

//Contexto de Ejecución Funcional (FEC)
function suma(a, b) {
    // Variables locales a la función suma
    var resultado = a + b;
    return resultado;
}

console.log(suma(5, 3)); // Salida: 8
// console.log(resultado); // Esto daría un error, ya que resultado es local a la función suma



// Contexto de Ejecución dentro de la función eval()
var x = 10;
var y = 20;

function evalExample() {
    var x = 30;
    var evalStr = 'console.log(x + y);';
    eval(evalStr); // ejecuta el código en el contexto actual
}

evalExample(); // Salida: 50 (ya que x es 30 del contexto de eval y y es 20 del contexto global)


function saludar(){
  var saludo="Hola";
}
// console.log(saludo);

console.log("");

console.log("CLOSURE");

console.log("------------------------------------------------------");
//CLOSURE

function iniciar(){
  var nombre='Mozilla'; //Variable local
  function mostrarNombre(){ //Funcion interna clausura
    console.log(nombre)
  }
  mostrarNombre();
}
iniciar();
console.log("-------------------------------------------------------");

console.log("");


//EJERCITANDO CLOSURE
function foo(){
  let valor=10;
  return ()=>{console.log(valor++);}
}

var bar1=foo();
var bar2=foo();

console.log("Llamamos a diferentes instancias de funcion foo()");
bar1(); //10
bar1(); //11
bar2(); //10
bar2(); //11

console.log("-------------------------------------------------------");
//CLOSURE
var meses=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];

function getMes1(n){
  if(n<1 || n>12) throw new RangeError('Rango incorrecto');
  return meses[n-1];
}
console.log(getMes1(3)); //Marzo

console.log("-------------------------------------------------------");

function getMes2(n){  
  var meses=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];

  if(n<1 || n>12) throw new RangeError('Rango incorrecto');
  return meses[n-1];

}
console.log(getMes2(9)); // Sep

console.log("-------------------------------------------------------");

var getMes3= (function(){
  var meses=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];

  return function inner(n){
    if(n<1 || n>12) throw new RangeError('Rango incorrecto');
    return meses[n-1];
  };
  
})();
console.log(getMes3(12)); //Diciembre



console.log("-------------------------------------------------------");

//Invocando funciones
console.log("Invocando funciones");
// (function(){
//   statements
// })();

(function(){
  var nombre="Esteban";
})();
// console.log(nombre); ERROR

console.log("");

var resultado= (function(){
  var saludo="hola";
  return saludo;
})();
console.log(resultado); //"Hola"

console.log("-------------------------------------------------------");

//POO-CLASE
console.log("POO- CLASES");
class Documento{
  constructor(titulo, autor, esPublicado){
    this.titulo=titulo;
    this.autor=autor;
    this.esPublicado=esPublicado;
    }
  publicar(){
    this.esPublicado=true;
  }
}

//Creamos una instancia de documento
let doc1= new Documento("Titulo del documento", "Autor del documento", false);
console.log(doc1);
doc1.publicar();
console.log(doc1);





class Libro extends Documento{
  constructor(titulo, autor, topico){
    super(titulo,autor,true);
    this.topico=topico;
  }
}

//Creamos una instancia de libro
let lib1= new Libro("Titulo del Libro", "Autor del Libro","Topico del Libro");
console.log(lib1);

lib1.publicar();
console.log(lib1);

console.log("-------------------------------------------------------");

class miObjeto{
  constructor(para1, para2){
    let atributo1=para1;  //Privado
    this.atributo2=para2;  //Publico
    this.metodo1= function(){//METODO PUBLICO
      //Cuerpo
      return 'Publico';
    };
    let metodo2= function(){//METODO PRIVADO
      //Cuerpo
      return 'Privado';
    };
  }
}

var obj=new miObjeto(x,y);  //Creamos una instancia
//Obj.atributo1 //Error
console.log(obj.metodo1());
console.log(obj.metodo2);   //No es una funcion // undefined
console.log("-------------------------------------------------------");
//Metodos estaticos
class Punto{
  constructor (x,y){
    this.x=x;
    this.y=y;
  }
  static distancia(a,b){
    const dx= a.x -b.x;
    const dy= a.y -b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}
const p1= new Punto(5,5);
const p2= new Punto(10,10);
console.log(Punto.distancia(p1,p2));

console.log("-------------------------------------------------------");
// Modulos (Exportas e Importar)

// importa la function greeting desde el modulo utils
const saludo= require("./saludo.js");
console.log(saludo.saludarHolaMundo());
console.log(saludo.saludar("Esteban"));
console.log("");

const suma1= require("./suma.js");
console.log(suma1(2,3));

console.log("-------------------------------------------------------");
//ITERABLES
console.log("ITERABLES: ");
var numeros=[1,2,3,4,5];
for(let data in numeros){
  console.log(data);
};

console.log("");
console.log(`for..in itera sobre todas las propiedades enumerables de unobjeto.
for..of itera sobre los valores de un objeto iterable. (arrays,strings, map, set)`);

console.log("");

let arr=['e1','e2','e3'];
arr.addedProp='arrProp';
for(let data in arr){
  console.log(data);
}
console.log("");
for(let data of arr){
  console.log(data);
}
console.log("-------------------------------------------------------");

//MAP
console.log("MAP");

let map = new Map();
map.set('foo', 123);
let user = {userId: 1}; //object
map.set(user, 'Alex');
console.log(map.get('foo')); //123
console.log(map.get(user)); //Alex
console.log('Tamanio:',map.size); //2
console.log(map.has('foo')); //true
console.log(map.delete('foo')); //true
console.log(map.has('foo')); //false

console.log("-------------------------------------------------------");

//SET
console.log("SET");
let set= new Set();
set.add('foo');
set.add({bar:'Bar'});
console.log(set.size); //2
for(let data of set){
  console.log(data);
}
set.add({cer:'Cerveza'})

for(let data of set){
  console.log(data);
}

for(let data in set){
  console.log(data);
}
console.log("-------------------------------------------------------");

//Cuanodo llamas a un map() en un array, este ejecuta a una funcion dentro de el, devolviendo un nuevo array
var miArray= [10,20,30];
var newArray= miArray.map(data=>data+1);
console.log("MAP()------------------");
console.log(newArray);

console.log("-------------------------------------------------------");

const reg=/\d{3}/g;
const str= "Java323Scr995ip4894545t";
const nuevaStr= str.replace(reg,"");
console.log(nuevaStr);
console.log("-------------------------------------------------------");

const arr1= [
  "Est555eb123an",
  "hola543 789que ta983l",
  "c532om453o estas234!!",
];

arr1.map((data)=>data.replace(reg,"")).forEach((data)=>console.log(data));

console.log("-------------------------------------------------------");

console.log('FILTER:-----------------------------------');
var miArray2=[10,20,30,40];
var filterValue= miArray2.filter(data=>data>20);
console.log(filterValue);
console.log("EJEMPLOS:");
let usuarios = [
  {id: 1, name: "Jose", isAdmin:true},
  {id: 2, name: "Ana", isAdmin:false},
  {id: 3, name: "Juan", isAdmin:true}
];
// Retorna array con los 2 primeros usuarios
let usuarios1y2 = usuarios.filter(item => item.id < 3);
console.log(usuarios1y2.length); // 2

//Retorna los usuarios administradores 
let usuariosAdmin=usuarios.filter(data=>data.isAdmin);
console.log(usuariosAdmin.length);

console.log("");
console.log("Reduce");
var miArray3=[10,20,30];
var total=miArray3.reduce((acumulador,actual)=>{
  return acumulador+actual;
});
console.log(total);
console.log("");
let usuarios2 = [
  { nombre: "Jose", trabajo: "Analista de Datos", pais: "AR" },
  { nombre: "Juan", trabajo: "Desarrollador", pais: "US" },
  { nombre: "Ana", trabajo: "Desarrollador", pais: "US" },
  { nombre: "Karen", trabajo: "Ingeniera de Software", pais: "BR" },
  { nombre: "Jonas", trabajo: "QA", pais: "BR" },
  { nombre: "Ale", trabajo: "Diseñador", pais: "AR" },
];

let usuariosAgrupadosPorPais= usuarios2.reduce((acumuladorGrupo,usuarios2)=>{let nuevoPais= usuarios2["pais"];
  if(!acumuladorGrupo[nuevoPais]){
    acumuladorGrupo[nuevoPais]=[];
  }
  acumuladorGrupo[nuevoPais].push(usuarios2);
  return acumuladorGrupo;
},{});

console.log(usuariosAgrupadosPorPais);

console.log('Usuarios acumulador de Argentina: ',usuariosAgrupadosPorPais["AR"]);
console.log("");
console.log("Usuarios acumulados de EEUU: ",usuariosAgrupadosPorPais["US"]);
console.log("-------------------------------------------------------");

console.log("REDUCE");
var miarray2= [10,20,30,40];
var objectCreatedFromArray= miarray2.reduce((acumulador, number, index, array)=>{
  acumulador[`number ${index}`]=number;
  return acumulador;
},{});
console.log(objectCreatedFromArray);
console.log("");

console.log("-------------------------------------------------------");
console.log("FIND");
const array3=[5,6,7,8,9,10,14,17];
const found= array3.find(elemento=>elemento>10); //Siguiente elemento a 10
console.log('Busca el siguiente elemento a 10: ',found);

const found2= array3.findIndex(elemento=>elemento>10);
console.log("Busca el elemento anterior a 10: ",found2);
console.log("-------------------------------------------------------");
console.log("FOREACH");

const array1= ['a','b','c'];
array1.forEach(elemento=>console.log(elemento));

console.log("-------------------------------------------------------");
console.log("-------------------------------------------------------");
console.log("-------------------------------------------------------");
console.log("-------------------------------------------------------");
console.log("-------------------------------------------------------");
console.log("-------------------------------------------------------");
console.log("-------------------------------------------------------");
console.log("-------------------------------------------------------");
