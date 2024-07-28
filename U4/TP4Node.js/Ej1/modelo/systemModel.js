const os=require('os');

function obtenerInfoSistema(){
  //Info del sistema
  const plataforma=os.platform();
  const arquitectura=os.arch();
  const release=os.release();
  const hostname=os.hostname();
  const type=os.type();

  //Info de la cpu
  const cpu=os.cpus();
  const cpuCount=cpu.length;
  const cpuModel=cpu[0].model;

  //Info de la memoria
  const totalMemoria=os.totalmem();
  const memoriaLibre=os.freemem();

  //Convertir bytes a gigabytes
  const byteGiga=(bytes)=>(bytes/(1024**3)).toFixed(2); //Acorta decimales


  //Crear un objeto con toda la info
  return {
    type,
    plataforma,
    arquitectura,
    release,
    hostname,
    cpuModel,
    cpuCount,
    totalMemoria: byteGiga(totalMemoria),
    memoriaLibre: byteGiga(memoriaLibre)
  };
}
module.exports={obtenerInfoSistema};
