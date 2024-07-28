const fs=require('fs');

fs.readFile('cpu_info.txt','utf8',(err,data)=>{
  if(err){
    console.log("Error al leer el archivo: ",err);
    return;
  }
  console.log(data);
  console.log('Fin de contenido del archivo');
});
