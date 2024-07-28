/*Los parametros rest son una forma de ir agregando parametros infinitos,
se define anteponiendo 3 puntos suspensivos*/
function suma(a,b,...c){
  let resultado=a+b;
  c.forEach(function(n){
    resultado+=n;
  });
  return resultado;
};

console.log('PARAMETRO REST:')
console.log(suma(1,2)); //3 
console.log(suma(1,2,3)); //6
console.log(suma(1,2,3,4)); //10
console.log(suma(1,1,1,2,5,10)); //20

console.log('-----------------------------------------------------------');

console.log('Operador spread:');
console.log("Anteponemos los puntos suspensivos tambien");

const arr1=[1,2,3,4,5];
const arr2=[6,7,8,9,0];

console.log(arr1,arr2);

console.log('Los agregamos a otro arreglo:');
const arr3=[...arr1,...arr2];
console.log(arr3);
