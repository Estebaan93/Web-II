/*function suma(a,b){
  return a+b;
}


// console.log(suma(5,3));
// console.log(suma(10,13));


const arr=[1,2,3,4,2];

console.log(arr[4]);

arr.push(7);

console.log(arr);

console.log(arr.length);

console.log(arr.includes(3));
console.log(arr.indexOf(3));
console.log("");*/

const map=new Map();
const arr1=[2023,2024,2025];
let posicion=3;
let number='2023202320232023';
const posicionGrande=BigInt(number);

while(!map.has(arr1.join(''))){
  map.set(arr1.join(''),posicion)
  
  const suma=arr1[0]+arr1[1]+arr1[2];

  arr1.shift();
  arr1.push(suma);
  posicion++;  
}
console.log(map.size);

//Obtener el tamaño del ciclo
const cicloInicial=map.get(arr1.join(''));
const cicloLength=posicion-cicloInicial;

//Calcular la posicion dentro del ciclo
const posicionCiclo=(posicionGrande-cicloInicial)%cicloLength+cicloInicial;

//Reiniciamos la secuencia para encontrar el resultado de la pos
arr1.length=0;
arr1.push(2023,2024,2025);
posicion=3n;

//Encontramos las ultimas 4 cifras de la posicion dentro del ciclo
while(posicion<posicionCiclo){
  const siguienteNumero=(arr1[0]+arr1[1]+arr1[2]);
  arr1.shift();
  arr1.push(siguienteNumero);
  posicion++;
}
console.log(arr1.join(''));
console.log(map.get('2023202320232023'));


/*
map.set(arr1.join(''),1);
map.set([1,2,3,4,5].join(''),2)
map.set(arr1.join(''),2)

console.log("Con entries");
for(let data of map.entries()){
  console.log(data);
}

console.log(map.has(arr1.join('')));
*/
