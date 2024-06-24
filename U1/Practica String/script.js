	console.log('Funciones basicas:');
function suma (x,y) {
	return x+y;
	console.log('Esta linea nunca se ejecutara');	//Lo que esta despues del return no se ejecuta
}
console.log(suma(1,3));
console.log("------------------------------------------------------------------");

function obtNumLetras (str) {
	return str.length;
}
console.log("Sam: ",obtNumLetras("Sam"));
console.log("Esteban: ",obtNumLetras("Esteban 123"));

console.log("------------------------------------------------------------------");

function convertirMay (nombre) {
	return nombre.toUpperCase();
}
console.log('sam: ', convertirMay("sam"));
console.log("------------------------------------------------------------------");

function convertirMin (nombre) {
	return nombre.toLowerCase()();
}
console.log('esteban: ', convertirMay("esteban"));
console.log("------------------------------------------------------------------");

console.log('Acceso a una cadena: ')
const lenguaje= "JavaScript";
lenguaje[0];
lenguaje[1];
lenguaje[2];
console.log(lenguaje[0]);
console.log(lenguaje[1]);
console.log(lenguaje[2]);
function obtPrimera (str) {
	return str[0];
}
console.log("Esteban: ",obtPrimera("Esteban"));
function obtUltimo (str) {
	return str [str.length-1];
}
console.log('Esteban: ', obtUltimo("Esteban"));
console.log('');

console.log('Con la funcion length:');
console.log(lenguaje[lenguaje.length-1]);
console.log('');

console.log('Con el metodo .at(), este lee un indice que tambien puede ser negativo');
console.log(lenguaje.at(0));
console.log(lenguaje.at(1));
console.log(lenguaje.at(2));
console.log("------------------------------------------------------------------");
console.log('Subcadenas:');
console.log('Firma de funcion: something (inicio, final)' );
console.log(lenguaje.substring(4, 10));
console.log(lenguaje.substring(4));
console.log('Con una funcion:');
function filtrar (str) {
	return str.substring(4);
}
console.log(lenguaje,"->", filtrar(lenguaje));
console.log("------------------------------------------------------------------");

console.log('Interpolacion de cadenas +=');
let nombre= "sam";
let apellido= "Azul";
console.log(nombre+" "+apellido);
nombre= nombre +" Verde";
console.log(nombre);
apellido+=" "+nombre;
console.log(apellido);
console.log('Con una funcion:');
function concatenar (nombre, apellido) {
	return nombre+" "+apellido;
}
console.log(concatenar('Esteban',"Moreira"));
console.log("------------------------------------------------------------------");
console.log('Cadenas de plantillas');
console.log(`Cadena
multilinea`);
console.log(`Probando ${lenguaje}`);
console.log('Probamos con una funcion:');
function plantilla (str) {
	return `Probando desde la funcion y enviamos a ${str}`;
}
console.log(plantilla("Esteban"));
console.log("------------------------------------------------------------------");
console.log('Primera letra Mayuscula, resto minuscula');
function oracionFormal (str) {
	return str[0].toUpperCase()+str.substring(1).toLowerCase();
}
console.log(oracionFormal("esTEban"));
console.log("------------------------------------------------------------------");
