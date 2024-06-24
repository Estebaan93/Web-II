//Numeros con separador numerico, en caso de que sean grandes. Puede ayudar a la legibilidad
console.log('Separador numerico, en el codigo:');
let n1=1_000;
let n2=1_000_000

console.log(n1,",",n2);
console.log("------------------------------------------------------------------");
console.log('Convertir a cadena: con toString()');
let n3=31;
n3=n3.toString();
console.log(n3);
console.log(typeof n3);
console.log("------------------------------------------------------------------");
//NaN (Not a Number)
console.log('Ejemplo de NaN:','abc'*4);
console.log("------------------------------------------------------------------");
console.log('Funcion para convertir a string:');
function convertir (number) {
	return number.toString();
}
console.log(convertir(23));
console.log(typeof convertir(23));
console.log("------------------------------------------------------------------");
console.log('Convertir numero a string: Number.parseInt(str, 10))');
let str="29";
//El primer parametro es la cadena, el segundo parametro es la base del sistema numero 10 por defecto
console.log(Number.parseInt(str,10));
console.log(typeof Number.parseInt(str,10));
console.log("------------------------------------------------------------------");
console.log(Number.parseInt("123abc", 10));
console.log(typeof Number.parseInt("123abc", 10));
console.log("------------------------------------------------------------------");
