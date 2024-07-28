/*7 formas de loops en JS*/

//1. for loop
let arr1=[5,10,15,20,25];
console.log('for:')
for(let i=0; i<arr1.length;i++){
  console.log(arr1[i]);
}

console.log('--------------------------------------------------');

//2. for in loop
console.log('for in:')
for(let data in arr1){
  console.log(arr1[data]);
}

console.log('--------------------------------------------------');

//3. while loop
let i=0;
console.log('while:')
while(i<arr1.length){
  console.log(arr1[i]);
  i++;
}

console.log('--------------------------------------------------');

//4. do while loop
let j=0;
console.log('do while')
do{
  console.log(j);
  j++;
}while(j<5);

console.log('--------------------------------------------------');

//5. for of loop
console.log('for of:')
for(let data of arr1){
  console.log(data);
}

console.log('--------------------------------------------------');

//6. forEach()method
console.log('forEach:')
arr1.forEach((data)=>{
  console.log(data);
});

console.log('--------------------------------------------------');

//7. map()method
const newArray=arr1.map((data)=>{
  return data;
});

console.log('Con map:')
console.log(newArray);
