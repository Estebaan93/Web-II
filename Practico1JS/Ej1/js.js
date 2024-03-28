const contiene = (obj1, obj2) => {
  // Convertir los objetos a arrays de claves
  const claves1 = Object.keys(obj1);
  const claves2 = Object.keys(obj2);

  // Filtrar las claves que no están en el segundo objeto
  const noEncontradas = claves1.filter(clave => !claves2.includes(clave));

  // Si no hay claves no encontradas, entonces el primer objeto está contenido en el segundo
  return noEncontradas.length === 0;
};


// Pruebas
console.log(contiene({ pelo: 'largo', barba: false }, { edad: 25, pelo: 'largo', barba: true })); // true
console.log(contiene({ edad: 25, pelo: 'largo', barba: true }, { pelo: 'largo', barba: true })); // false
