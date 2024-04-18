function crearPersona(nombre, apellido, documento, altura, peso) {
  return {
    nombre: nombre,
    apellido: apellido,
    documento: documento,
    altura: altura,
    peso: peso,
    calcularIMC: () => {
      const alturaEnMetros = altura / 100;
      return peso / (alturaEnMetros ** 2);
    }
  };
}

// Crear la lista personas
let listaPersonas = [
  crearPersona("Juan", "Gomez", "22112277", 175, 80),
  crearPersona("Maria", "Lopez", "33445566", 160, 65),
  crearPersona("Pedro", "Martinez", "11223344", 180, 90)
  ];

//Imprimir con bucle for
console.log('Recorremos con bucle for:');
for(let i=0; i<listaPersonas.length; i++){
  console.log(`Apellido: ${listaPersonas[i].apellido}, Nombre: ${listaPersonas[i].nombre}`);
}
console.log('');

console.log('Recorremos con bucle for in:');
for (let i in listaPersonas) {
  console.log(`Apellido: ${listaPersonas[i].apellido}, Nombre: ${listaPersonas[i].nombre}`);
}
console.log('');

console.log('Recorremos con bucle for of:');
for (const i of listaPersonas) {
  console.log(`Apellido: ${i.apellido}, Nombre: ${i.nombre}`)
}
console.log('');

console.log('Recorremos con bucle forEach:');
listaPersonas.forEach(persona =>{
  //Se utiliza la función toFixed(2) para formatear el IMC a dos decimales.
  console.log(`Apellido: ${persona.apellido}, Nombre: ${persona.nombre}, Masa Corporal: ${persona.calcularIMC().toFixed(2)}`) 
})

