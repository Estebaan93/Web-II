const potenciarYRetornarArgumentos= (num, ...variable)=> {
  const array = [...num];
  variable.forEach((variable) => {
    array.push(variable ** 2);
  });
  return array;
}
const array = [];
for(let i=0; i<Math.floor(Math.random()*10+1); i++){
  array[i]=Math.floor(Math.random()*10);
}
//console.log(array);
const n1=Math.floor(Math.random()*10+1);
const n2=Math.floor(Math.random()*10+1);
const resultado = potenciarYRetornarArgumentos(array, n1,n2);

//console.log(resultado); // [1, 4, 9, 16, 25, 36]
const parr=document.createElement('p');
parr.innerHTML=`El array: ([${array}] ${n1},${n2}) // [${resultado}]`;
parr.style.color = 'white';
parr.style.backgroundColor = 'rgb(0,0,0,.5)';
document.body.appendChild(parr);

