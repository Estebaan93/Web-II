/*Un callbacks es una funcion que se pasa a otra como argumento y que se ejecuta despues de que se haya completado alguna operacion
*/

function modificar(array, callback){
  //Hacemos algo...
  array.push('Esteban');
  //Despuess de hacer algo...
  callback();
}

const nombre=['']
