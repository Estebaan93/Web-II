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
