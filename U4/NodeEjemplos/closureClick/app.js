// console.log("Hola mundo");

//2 formas de importar
const utilidades=require('./utilidades');
console.log(utilidades.suma(4,3));

console.log("");

const suma=require('./utilidades').suma;
console.log(suma(2,8));

console.log("---------------------------------------------");

const {
  log,
  error,
  info,
  warning
}=require("./logger");

log('Llamamos al modulo logger, ',warning);

console.log("---------------------------------------------------------");
//NODE JS
const fs=require('fs');
const { resolve } = require('dns');
const { rejects } = require('assert');

console.log("Node.js");
console.log("OPERACIONES BLOQUEANTES:");
const data=fs.readFileSync("./test.txt", 'utf8');
console.log(data);
console.log("Otras tareas");
console.log("");
console.log("-----------------------------------------------------------");

console.log("OPERACIONES NO BLOQUEANTES:");

fs.readFile('test.txt','utf8', function(error, data){
  if(error){
    console.log("Error al leer el archivo", error);
  }
  console.log(data);
});
console.log("Otras tareas");

console.log("-----------------------------------------------------------");
//FETCH
/*fetch(`https://seriousnews.com/api/headlnes`)
  .then(response=>response.json())
  .then(headlines=>{
    console.log(headlines);
  }).catch(error=>console.log("Error: ",error));*/

console.log("-----------------------------------------------------------");
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Id: ',data[0].userId);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

console.log("");  
console.log("-----------------------------------------------------------");
//CREANDO NUESTRAS PROMESAS
let completada=true;
let learnJS= new Promise(function(resolve,reject){
  setTimeout(()=>{
    if(completada){
      resolve("Promesa learnJS resuelta");
    }else{
      reject("Retorno promesa rechazada como ERROR");
    }
  },8*1000);
 });
//Consumir la promesa
learnJS
  .then(success=>console.log(success))
  .catch(reason=>console.log(reason))
  .finally(()=>console.log('finally'));
 
console.log("-----------------------------------------------------------");
//Promise.all()
var p1=Promise.resolve(3);
var p2=1337;
var p3=new Promise((resolve,reject)=>{
  setTimeout(resolve,100,'comida');
});

Promise.all([p1,p2,p3]).then(values=>{
  console.log('Promesas p1 p2 p3 :',values);
});

console.log("-----------------------------------------------------------");
//Async Await
console.log("");
console.log("Async Await:")
function helloWord(){
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve('HOLA MUNDO!');
    },2000);
  });
}

async function msg(){
  const msg=await helloWord();
  console.log('Mensaje: ',msg);
}
msg();
console.log("");

//Async Await
function resolveAfter2Seconds(x){
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(x);
    },2000);
  });
}

async function add1(x){
  const a=await resolveAfter2Seconds(20);
  const b=await resolveAfter2Seconds(30);
  return `Promesa add1: ${x+a+b}`;
}
add1(10).then(v=>{
  console.log(v); //Imprime 60 antes de 4 segundos
});

async function add2(x){
  const p_a=await resolveAfter2Seconds(20);
  const p_b=await resolveAfter2Seconds(30);
  return `Promesa add2: ${x+await p_a+ await p_b}`;
}
add2(10).then(v=>{
  console.log(v); //Imprime 60 antes de 2 segundos
});
console.log("");

console.log("-----------------------------------------------------------");
//REESCRITURA DE PROMESAS EN ASYNC AWAIT


console.log("-----------------------------------------------------------");
console.log("-----------------------------------------------------------");
console.log("-----------------------------------------------------------");
console.log("-----------------------------------------------------------");
console.log("-----------------------------------------------------------");
console.log("-----------------------------------------------------------");
console.log("-----------------------------------------------------------");
