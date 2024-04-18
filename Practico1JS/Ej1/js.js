var claves1, claves2;

const contiene = (obj1, obj2) => {
  // Convertimos los objetos a arrays de claves
  claves1 = Object.keys(obj1);
  claves2 = Object.keys(obj2);

  // Recorremos las claves del primer objeto
  for (const clave of claves1) {
    // Si la clave no existe en el segundo objeto, devolvemos false
    if (!claves2.includes(clave)) {
      return false;
    }

    // Si el valor de la propiedad no coincide, devolvemos false
    if (obj1[clave] !== obj2[clave]) {
      return false;
    }
  }

  // Si todas las claves y valores coinciden, devolvemos true
  return true;
};

const resultado1 = contiene({ pelo: 'largo', barba: false },{ edad: 25, pelo: 'largo', barba: false }); // true
const resultado2 = contiene({ edad: 25, pelo: 'largo', barba: true },{ pelo: 'largo', barba: true },); // false

console.log(resultado1); // true
console.log(resultado2); // false
for(let i in claves1){
	console.log(`${i}: ${claves1[i]}`);
}
console.log('');
for (j in claves2) {
	console.log(`${j}: ${claves2[j]}`);
}