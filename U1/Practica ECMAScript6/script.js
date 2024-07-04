/*ECMAScript6 2015, gracias a los transpiladores funcionara en todos los navegadores
(traduce el codigo a un mismo lenguaje ES6 a ES5)*/

//Variable let, a diferencia de var no puede ser accesible más allá de su scope.
console.log('Variable let (alcance local) y var (alcance global):');
(function () {
	console.log(varGlobal);	//undefined
	//console.log(letLocal);	//undefined
	if(true){
		var varGlobal="Buen dia";
		let letLocal="Buenas noches";
	}
	console.log(varGlobal);	//"Buen dia"
	//console.log(letLocal);	//undefined
})();
console.log('-------------------------------------------------------------------------------');

console.log('Funcion arrow: sintaxis mas compacta:');
console.log('Si no hay argumentos, empezamos con 2 paréntesis y la flecha: (setInterval):')
let i=0;
let miIntervalo=setInterval(()=>{
	i++;
	console.log('Ejecución en paralelo setInterval->23');
	if(i===3){
		//Detener el intervalo
clearInterval(miIntervalo);
	}
}, 2000);

console.log('Con un argumento, no usamos paréntesis:');
var vocales=['a','e','i','o','u'];
vocales.forEach(dato=>{
	console.log(`Vocales ${dato}`);
});

console.log('Con más de un argumentos, volvemos a los paréntesis:');
var sum=(a,b)=>a+b; //En una linea
console.log(sum(2,3));
console.log('');

console.log('Parametros por defecto (tambien se puede referenciar a otros parametros):');
function saludo (name, param1="Sr.", param2='Hola ' + param1) {
	console.log(param2+' '+name);
};
saludo('Esteban'); //Hola Sr esteban
saludo('Nicolas', undefined,'Que hay?'); //Que hay Nicolas
console.log('');

console.log(`Parametros REST (se puede pasar un conjunto indeterminado de parametros, en forma de array.
	Solo puede ser parametro rest el ultimo argumento de la funcion):`);
function imprimirSaludo (name, ...fancyNames) {
	var fullname=name;
	fancyNames.forEach(fancyN=>fullname+=' '+fancyN);
	console.log(fullname);
}
imprimirSaludo('Felipe');	//Felipe
imprimirSaludo('Felipe', 'Juan', 'Forlan');
console.log('-------------------------------------------------------------------------------');
console.log('');
console.log(`Clases y Herencia:`);

//Creacion de la clase
class Documento{
	constructor(titulo, autor, esPublicado){
		this.titulo=titulo;
		this.autor=autor;
		this.esPublicado=esPublicado;
	}
	publicado(){
		this.esPublicado=true;
	}
}

//Clase de herencia
class Libro extends Documento{
	constructor(titulo, autor, topico){
		super(titulo, autor, true);
		this.topico=topico;
	}
}

// Crear una instancia de la clase Documento
let documento1 = new Documento("Mi Documento", "Autor Esteban", false);
console.log(documento1); // Imprimirá: Documento { titulo: 'Mi Documento', autor: 'Autor Esteban', esPublicado: false }

// Publicar el documento
documento1.publicado();
console.log(documento1); // Imprimirá: Documento { titulo: 'Mi Documento', autor: 'Autor Esteban', esPublicado: true }

// Crear una instancia de la clase Libro
let libro1 = new Libro("Mi Libro", "Autor Esteban", "Ficción");
console.log(libro1); // Imprimirá: Libro { titulo: 'Mi Libro', autor: 'Autor Esteban', esPublicado: true, topico: 'Ficción' }

// Acceder a propiedades específicas de Libro
console.log(libro1.titulo); // Imprimirá: Mi Libro
console.log(libro1.topico); // Imprimirá: Ficción
console.log('-------------------------------------------------------------------------------');
console.log('');

console.log('MODULOS:');
const suma= require ('./suma');
console.log(suma(2,3));
console.log('-------------------------------------------------------------------------------');
console.log('');

console.log('Operador de propagacion: ');
console.log(`Nos permite pasar un array de elementos a una funcion, convirtiendo a cada elemento en un argumento`);
function f (v,w,x,y,z) {
	return `${v}, ${w}, ${x}, ${y}, ${z}`;
}
//Creamos el array de elementos
let args=[0,1];

//Llamamos a la funcion f, y le pasamos el operador spread
console.log(f(-1,...args, 2, ...[3]));
console.log('-------------------------------------------------------------------------------');
console.log('');

console.log('Desectructuracion: nos permite descomponer un array u objeto para asignarlo a un conjunto');
//Array 
var a, b, rest;
[a,b]=[1,2];

var foo= function(){
	return[175, 75];
};

var [height, weight]= foo();
console.log(foo());
console.log('');

console.log(`En el caso de descomponer las propiedades de un objeto, es importante que las variables
a las que van a parar tengan el mismo nombre que las propiedades que queremos asignar:`);

//Desectructuracion de objetos
({a, b}={a:1, b:2});

//Desectruturacion usuario
var usuario={
	name: "Esteban",
	sobrenombre: "Nico"
};

var {name, sobrenombre}= usuario;

console.log(usuario.name);
console.log(name);
console.log('-------------------------------------------------------------------------------');
console.log('');
console.log(`For.. of loop:`)
let numeros=[10,2,13,7,5];
console.log('For of: Se utiliza para iterar sobre los valores de un objeto iterable')
for (let i of numeros) {
	console.log(i);
};
console.log('');
let letras="HOLA";
for (let i of letras) {
	console.log(`${i}`);
};
console.log('');
console.log('For in: itera entre todas las propiedades enumerables del objeto:')
for (let i in letras) {
	console.log(i);
}
console.log('');
for (let i in numeros) {
	console.log(i);
};
console.log('-------------------------------------------------------------------------------');
console.log('');
console.log(`Generadores: permite crear funciones que pueden ser pausadas y reanudadas, facilitando el manejo 
	de tareas asincrónicas y el control de iteraciones, palabra clave function* y se utiliza con la palabra
	clave yield para producir valores, next para pasar el siguiente yield`);

function* contador(){
	yield 1;
	yield 2;
	yield 3;
}

const generador= contador();
console.log(generador.next().value);	//1
console.log(generador.next().value);	//2
console.log(generador.next().value);	//3
console.log(generador.next().value);	//undefined
console.log('Una vez llamada al generador, no puede llamarse nuevamente porque se han consumido sus valores')

console.log('');
const nuevogenerador=contador();
console.log('Tambien se pueden iterar:');
for (let i of nuevogenerador) {
	console.log(i);
}
console.log('-------------------------------------------------------------------------------');
console.log('');

console.log('MAP Y SETS');
console.log('Map (mapear unos valores con otros como si fuera un diccionario clave/valor)');
let map= new Map();
map.set('comida', 123);
let user= {userId: 1};
map.set(user, 'Alex');

console.log('map clave comida: ',map.get('comida'));	//123
console.log('map clave user: ',map.get(user));	//Alex
console.log(`Tamaño el mapa: ${map.size}`);

map.has('foo'); //true
map.delete('foo'); //true
map.has('foo'); //false
map.clear();
console.log(map.size);
console.log(map.keys());
console.log('-------------------------------------------------------------------------------');
console.log('');

console.log('WeakMap: solo acepta objetos como claves');
console.log(`referencia a las claves es débil, lo que significa que si no hay otras referencias
al objeto que actúa como clave, el garbage collector podrá liberarlo.`);

let key1= {userId: 1};
let key2= {userId: 2};
let weakMap= new WeakMap();

weakMap.set(key1, 'Esteban');
weakMap.set(key2, 'Marilena');
console.log(weakMap.get(key1),', ', weakMap.get(key2)); //Obtener el valor
console.log(weakMap.has(key1));	//Verificar el valor
console.log('');
console.log('Almacenamiento privado con weakMap:');

const privateData = new WeakMap();
class MyClass {
  constructor(name) {
    privateData.set(this, { name: name });
  }
  getName() {
    return privateData.get(this).name;
  }
}
const instance = new MyClass("Alice");
console.log(instance.getName()); // "Alice"
console.log('');
// No se puede acceder directamente a privateData desde fuera
console.log(privateData.get(instance)); // No es accesible

console.log('-------------------------------------------------------------------------------');
console.log('');

console.log(`SET: (conjunto de elementos no repetidos, pueden ser objetos como valores primitivos.)),
		las key y values son los mismos el valor del objeto`);
let set= new Set();
set.add('pizza');
set.add('cerveza');

console.log('Tamaño del set: ',set.size);

for (let data of set) {
	console.log(data);
}
console.log('');

console.log('entries() devuelve la pareja')
for(let data of set.entries()){
	console.log(data);
}
console.log('');
console.log('Otras formas de definir un set es a través de un array o bien concatenando el método add');
let set1= new Set(['bar', 'mani']);
console.log('');
for (let data of set1) {
	console.log(data);
}
console.log('');

//Los elementos son unicos
let set2= new Set().add('pizza').add('cerveza').add('cerveza');
for (let data of set2) {
	console.log(data);
}

console.log('-------------------------------------------------------------------------------');
console.log('');

console.log(`WeakSet: (Unicamente pueden contener colecciones de objetos), la referencia a los objetos es debil,
		por lo que si no hay referencia en una de ellos el garbage collector lo podra liberar. Los WeakSet no son 
		enumerables, y no hay una lista de objetos almacenados en la coleccion: add, delete, has.`);
let obj= ['bar', 'pizza'];
let ws= new WeakSet();
ws.add(obj);

console.log(ws.has(obj));
console.log(ws.size);

console.log('-------------------------------------------------------------------------------');
console.log('');
console.log(`PROMESAS: Tareas asicronicas, ej peticion a HTTP) pendiente, cumplida, rechazada, arreglada`);
function obtenerRespuesta () {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			const datos= {id:1, nombre: "Esteban"};
			//Simulando el exito de obtencion de los datos
			resolve(datos);
			//Simula un fallo 
			//reject("Error en el servidor")
		}, 2000); //Simulamos retardo de 2 segundos
	});
}

//Utilizamos la nueva promesa para obtener los datos y manejar el resultado
obtenerRespuesta()
	.then(datos=>{
		console.log('Datos obtenidos de la promesa', datos,'->314');
	})
	.catch(error=>{
		console.log('Error', error);
	});

//Funcion moderna con try catch
obtenerRespuesta()
    .then(function(datos) {
        console.log("Suceso de la promesa->323");
    })
    .catch(function(error) {
        console.log("error", error);
    });
console.log('');

const miPromesa = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve('PIZZA');
	}, 3000);
});


function resolve1(data) {
	console.log('Primer then:', data,'->338');
	return 'Paso 1 completado';
}

function reject1(error) {
	console.error('Error en el paso 1:', error,'->343');
}

function resolve2(data) {
	console.log('Segundo then:', data,'->347');
	return 'Paso 2 then 2 completado';
}

function reject2(error) {
	console.error('Error en el segundo then:', error);
}
function resolve3(data) {
	console.log('Tercer then:', data,'->355');
}

function reject3(error) {
	console.error('Error en el tercer then:', error);
}

miPromesa
	.then(resolve1,reject1)
	.then(resolve2,reject2)
	.then(resolve3,reject3);
console.log('-------------------------------------------------------------------------------');
console.log('');
console.log(`Metodos de objetos:`);
console.log('Object.assing() copiar las porpiedades de un obj a otro, desde source a tarjet:');

let tarjet1={};
let source1={a:1, b:2, c:3};
let source2={
	name: 'Esteban',
	color: 'Azul'
}
console.log('target1 antes de copiar los elementos: ',tarjet1);
Object.assign(tarjet1, source1);
console.log('target1: ',tarjet1);
let copia= Object.assign({}, source2);
console.log('Imprimimos copia con for..in:');
for (let data in copia) {
	console.log(`${data}: ${copia[data]}`);
}
console.log('');
console.log('Usando Object.keys: devuelve un array de las claves del objeto:');
Object.keys(copia).forEach(data=>{
	console.log(`${data}: ${copia[data]}`);
})
console.log('');
console.log('Usando Object.values: devuelve un array de los valores del objeto:');
Object.values(copia).forEach(data=>{
	console.log(data);
});
console.log('');
console.log('Usando Object.entries: devuelve un array de los pares del objeto (clave-valor):');
Object.entries(copia).forEach(([clave, data])=>{
	console.log(`${clave}: ${data}`);
});
console.log('');
console.log('Usando un bucle for..of con Object.entries: iteramos sobre los pares (clave-valor) del objeto:')
for (let [clave, data] of Object.entries(copia)) {
	console.log(`${clave}: ${data}`);
}
console.log('');
console.log('-------------------------------------------------------------------------------');
console.log(`Object.is: determina si son iguales.s similar al operador === con la diferencia qe que éste 
		último trata los valores -0 y +0 como iguales:`);
console.log('cerveza->cerveza: ',Object.is('cerveza', "cerveza"));
console.log('[]->[]: ',Object.is([], [])); //Devuelve false por ser comparados por referencia
const array1=[];
const array2=array1;
console.log('array1->array2 (apunta a array1): ',Object.is(array1, array2));
console.log("null->null: ",Object.is(null,null));
console.log("0->-0: ",Object.is(0,-0));
console.log('NaN->0/0: ', Object.is(NaN, 0/0));
console.log('');
