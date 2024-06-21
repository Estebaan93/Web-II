console.log('Funcion flecha permite una sintaxis mas corta:');
console.log('Funcion flecha una linea:');
const sumar = (a, b) => a + b;
console.log(sumar(2,3));
console.log("------------------------------------------------------------------");

console.log('Funcion flecha multiple lineas:')
const multiplicar=(a,b)=>{
  const resultado2= a*b;
  return resultado2;
};
console.log(multiplicar(2,3));
console.log("------------------------------------------------------------------");

console.log('ES6:');
let array=[1,2,3,4,5].map(n=>n*2);
console.log(array);
console.log("------------------------------------------------------------------");
const getMajorNumber = (a, b) => {
  if (a > b) {
    return a
  } else {
    { return b }
  }
}
console.log("Llamamos a la funcion, con condicional y el mayor numero es: " + getMajorNumber(4, 6));

console.log("------------------------------------------------------------------");

console.log('Sintaxis JS')
let languaje = "JavaScript";
let company = {
  name: "EDteam",
  slogan: "Nunca te detengas",
  foundead: 2015
}
console.log("Llamamos a la funcion, y obtenemos el nombre: " + company.name);
//"EDteam"

console.log("Typeof tipo de dato: " + typeof (languaje));
console.log("");
//Inmutabilidad
//El uso de un metodo de cadena no modifica la cadena
languaje.toUpperCase();
console.log("Inmutabilidad: no modifica la variable " + languaje);
//La asignaacion le da al primitivo un nuevo valor (no lo muta)
languaje = languaje.toUpperCase();
console.log(languaje);
//console.log(languaje.toUpperCase());
console.log("------------------------------------------------------------------");

//El uso de un metodo de arreglo muta el arreglo
var foo = [];
console.log(foo);
foo.push("gato");
console.log(foo);


console.log("------------------------------------------------------------------");
console.log("");
console.log("Trusty y Falsy:");
//Truty y Falsy
var valorFalsy = 0; //Falso
console.log(typeof valorFalsy);

if (valorFalsy) {
  console.log("Este bloque de código no se ejecutará, ya que el valor es falsy.");
} else {
  console.log("Este bloque de código se ejecutará porque el valor es falsy.");
}

var valorTruthy = "Hola"; //Verdadero
console.log(typeof valorTruthy);

if (valorTruthy) {
  console.log("Este bloque de código se ejecutará, ya que el valor es truthy.");
} else {
  console.log("Este bloque de código no se ejecutará, porque el valor es truthy.");
}
console.log("------------------------------------------------------------------");
console.log("Alcances de variables global y locales:");
//Alcances de variables Scope
function global() {
  a = 1;    //Alcance global
  return a;
}
function local() {
  let b = 2; //Local
  return b;
}
console.log("Llamamos a la funcion, devuelve el valor de a= " + global());
console.log("Variable global: " + a);
console.log("Llamamos a la funcion devuelve el valor de b= " + local());
//console.log(b); //Variable local
console.log("------------------------------------------------------------------");
var c = 5;
var d = 10;
if (c === 5) {
  let c = 4;
  var d = 1;
  console.log(c); //4
  console.log(d); //1
}
console.log(c); //5
console.log(d); //1
console.log("------------------------------------------------------------------");
console.log("");
console.log("Hoisting: Puede usar una variable o llamar a una función antes de que se declare en el código.");

//Hoisting
//Elevacion de variable
console.log(x); // undefined
var x = 5;
console.log(x); // 5

//Funcion
sayHello(); // "Hello!"
function sayHello() {
  console.log("Hola!!!");
}
diHola();
function diHola() {
  var x;
  console.log(x); //undefined
  x = 10;
}
console.log("------------------------------------------------------------------");

console.log("------------------------------------------------------------------");
//Cheatsheet
const name = "Proful";
const city = "Jetpore";
const msg = `${name} is from ${city}`;
console.log(name);
console.log(city);
console.log(msg);
console.log(msg.indexOf(city))

//Template literal
console.log("");
let e = 10;
let f = 20;
console.log(`${e}+${f} es ${e + f}`);

//Objeto literal
console.log("");
const Automovil = {
  marca: 'Honda',
  modelo: "Civic",
  Año: 2001,
  'Otro': {
    nombre: "Jorge"
  }
}
console.log(`Marca: ${Automovil.marca}.
  Modelo: ${Automovil.modelo}.
  Año: ${Automovil.Año}.
  Nombre del propietario: ${Automovil.Otro.nombre}`);
console.log("");

var persona = {
  nombreCompleto: ['Bob', 'Smith'],
  edad: 32,
  genero: 'masculino',
  intereses: ['música', 'esquí'],
  bio: function () {
    console.log(this.nombreCompleto[0] + ' ' + this.nombreCompleto[1]
      + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
  },
  saludo: function () {
    console.log('Hola, Soy ' + this.nombreCompleto[0] + '. ');
  }
};
var nombre = persona.nombreCompleto[0];
var edad = persona['edad'];
persona.bio();
persona.saludo();
console.log(nombre);
console.log(edad);
console.log("");

//2 formas de crear un objeto
function crearPersona(nombre, dni, grado, nivel) {
  var it = {};
  it.nombre = nombre;
  it['dni'] = dni;
  it.grado = grado;
  it.nivel = nivel;
  return it;
}
myObject = crearPersona("Jose Perez", '32887533', 'A', 3);
console.log(myObject);
console.log("");
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
var rand = new Person('Rand McKinnon', 33, 'M');
var ken = new Person('Ken Jones', 39, 'M');
console.log(rand);
console.log(ken);

console.log("");

//Recorrer objetos
let user = {
  name: "Jose",
  años: 30,
  esAdministrador: true
};

for(let i in user){
  //keys
  /*alert(i);
  alert(user[i]);*/
  console.log(`${i}: ${user[i]}`);
  //console.log(user[i]);
}

console.log("------------------------------------------------------------------");
console.log("Tipado dinamico:");
let variable; //Sin declarar el tipo
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
} else {
  console.log("Falso");
}

