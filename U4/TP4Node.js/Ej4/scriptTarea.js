/*Modifique el programa para guardar las películas recuperadas en un archivo
callbackMovies.csv. */

const request=require('request');
const fs=require('fs');
const {convertirCSV,api}=require('./convertirCSVapi');

//URL de la api studio ghibil
// const apiURL='https://ghibliapi.vercel.app/films';

//Funcion para convertir a formato CSV
// function convertirCSV(movies){
//   const headers='Title, fecha\n';
//   const rows=movies.map(movie=>`${movie.title},${movie.release_date}`).join('\n');
//   return headers+rows;
// }

//Solicitar datos de la API
request(api,(error,response,body)=>{
  if(error){
    console.error(`Error de pedido request a la API: ${error.message}`);
    return;
  }
  if(response.statusCode!=200){
    console.error(`La solicitud no tuvo exito ${response.statusCode}`);
    return;
  }
  
  console.log('Procesando lista de peliculas: ');
  const movies=JSON.parse(body);
  movies.forEach(movie=>{
   console.log(`Titulo: ${movie.title} - año: ${movie.release_date}`); 
  })
  
  console.log("");
  //Convertir a formato CSV
  const csvData=convertirCSV(movies);

  //Escribir datos CSV en un archivo
  fs.writeFile('callbackMovies.csv', csvData, 'utf8', (err)=>{
    if(err){
      console.error(`No se pudo escribir el archivo: ${err.message}`)
      return;
    }
    console.log(`Peliculas guardadas en el archivo: callbackMovies.csv`);
    
  });
  
});

