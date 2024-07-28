/*Realice un programa que lea el contenido de un archivo de texto y lo muestre en la consola. Al finalizar imprima el mensaje “Fin de contenido del archivo”. */
// Realice el programa utilizando la función síncrona readFileSync 
const fs=require('fs');
try{
  const data=fs.readFileSync('cpu_info.txt','utf-8');
  console.log(data);
  console.log("Fin del archivo");
}catch(err){
  console.error('Error al leer el archivo: ',err);
}
