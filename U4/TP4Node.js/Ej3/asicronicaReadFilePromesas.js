const fs=require('fs').promises;

fs.readFile('cpu_info.txt','utf-8')
  .then((data)=>{
    console.log(data);
    console.log('Fin de contenido del archivo');
  })
  .catch((err)=>{
    console.log('Error al leer el archivo: ',err);
  });
