/*Realice un programa que guarde en un archivo de texto los datos del cpu.
Note que la salida de cpus() es un json y debe pasarse a un string usando la función
JSON.stringify().
Verifique el correcto funcionamiento. 
*/
const os=require('os');
const fs=require('fs');

//Obtener info de la cpu
const cpuInfo=os.cpus();

//Obtener datos de ram
const totalMemoria= os.totalmem();
const memoriaLibre= os.freemem();

//Convertir a megabytes
const memoriaTotalMB=(totalMemoria/1024/1024).toFixed(2);
const memoriaLibreMB= (memoriaLibre/ 1024/ 1024).toFixed(2);

const systemInfo = {
  cpus: cpuInfo.map(cpu => ({
    model: cpu.model,
    speed: cpu.speed,
    times: cpu.times,
  })),
  ram: {
    total: `${memoriaTotalMB} MB`,
    free: `${memoriaLibreMB} MB`,
    used: `${(memoriaTotalMB - memoriaLibreMB).toFixed(2)} MB`,
  }
};
//conventir a JSON
const cpuInfoJson=JSON.stringify(systemInfo,null,2);

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
