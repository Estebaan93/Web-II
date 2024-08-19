// d.- Modifique el programa para que este sea realizado usando promesas.
const request= require('request');
const fs= require('fs').promises; //Usar promesas de fs
const {convertirCSV, api}= require('../convertirCSVapi');

//Solicitar datos de la api
function obtenerPeliculas(){
 return new Promise((resolve,reject)=>{
   request(api,(error,response,body)=>{
     if(error){
      reject(new Error(`Error de pedido request a la api ${error.message}`));
      return;
     }
     if(response.statusCode !=200){
      reject(new Error (`La solicitud no tuvo exito: ${response.statusCode}`));
      return;
     }
     console.log('Procesando la lista de peliculas:');
     const movies=JSON.parse(body);
     movies.forEach(data=>{
       console.log(`Titulo: ${data.title}, Año: ${data.release_date}`);
     });
     resolve(movies);
   });
 });
}

//Funcion para guarda las peliculas
function guardarCSV(peliculas){
 const csvData= convertirCSV(peliculas);
 return fs.writeFile('callbackMovies.csv', csvData, 'utf-8');
}

//Ejecutar el flujo usando promesas
obtenerPeliculas()
 .then(peliculas=>{
  return guardarCSV(peliculas);
 })
 .then(()=>{
  console.log(`\nPeliculas guardadas en callbackMovies.csv`);
 })
 .catch(error=>{
  console.error(error.message);
 });
