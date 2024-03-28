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