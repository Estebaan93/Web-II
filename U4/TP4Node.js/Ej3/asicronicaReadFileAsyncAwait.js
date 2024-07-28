const fs=require('fs').promises;

(async ()=>{
  try{
    const data= await fs.readFile('cpu_info.txt','utf-8');
    console.log(data);
    console.log('Fin de contenido del archivo');
  }catch(err){
   console.error('Error al leer el archivo: ',err); 
  }
})();
