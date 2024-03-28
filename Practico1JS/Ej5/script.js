//Filtra los pares
const filterOutOdds= (...nums)=> nums.filter(num =>num % 2===0);

const numeros= [1,2,3,4,5,6,8,9,10];
const numerosFiltrados= filterOutOdds(...numeros);
//console.log("Filtramos los numeros pares: "+numerosFiltrados);

document.getElementById('Resultado').innerHTML=`Los numeros a filtrar son: (${numeros})`

const elemento=document.createElement('p');
elemento.textContent=`Los pares son: (${numerosFiltrados})`;
//Agrego el elemento al DOM
document.body.appendChild(elemento);

//Linea horizontal
const linea=document.createElement('hr');
document.body.appendChild(linea);

//Uso de slice extrae seccion de array
const numeros2=[11,12,15,18];
const buscar= numeros2.slice(1,3);
const elemento2=document.createElement('p');
elemento2.textContent=`Uso de slice, extrae seccion del array: (${numeros2}). Seccion (1, 3) <3 => ${buscar}`;
document.body.appendChild(elemento2);

//Uso del filter
const filtrarMenor10= (...nums)=> nums.filter(menor => menor<10);
const menores= [1,3,5,10,50,23];
const filtrarMenores= filtrarMenor10(...menores);
const elemento3=document.createElement('p');
elemento3.textContent=`Array: (${menores}) filtramos menores a 10: ${filtrarMenores}`;
document.body.appendChild(elemento3);