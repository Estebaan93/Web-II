/*Realice un programa que guarde en un archivo de texto los datos del cpu.
Note que la salida de cpus() es un json y debe pasarse a un string usando la función
JSON.stringify().
Verifique el correcto funcionamiento. 
*/
const os=require('os');
const fs=require('fs');

//Obtener info de la cpu
const cpuInfo=os.cpus();

//conventir a JSON
const cpuInfoJson=JSON.stringify(cpuInfo,null,2);

//Ruta del archivo donde se guarda la informacion
const filePath='cpu_info.txt';

//Escribir la informacion del cpu en el archivo
fs.writeFile(filePath,cpuInfoJson,(error)=>{
  if(error){
    console.log('Error al guardar la informacion del cpu: ',error);
  }else{
    console.log('Informacion del cpu guardada correctamente en ',filePath);
  }
});
