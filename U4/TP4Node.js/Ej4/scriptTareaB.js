/*b.- Modifique el programa para que este guarde en un archivo callbackMovies2011.cvs las películas del año 2011 
(Nota: no elimine la operatoria de guardar todas las películas)*/

const request=require('request');
const fs=require('fs');
const {convertirCSV,api}=require('./convertirCSVapi');

//URL de la api
// const api='https://ghibliapi.vercel.app/films';

//Funcion para convertir a formato cvs
/*function convertirCVS(movies){
  const headers='Titulo, fecha\n';
  const rows=movies.map(movie=>`${movie.title}, ${movie.release_date}`).join('\n');
  return headers+rows;
}*/

//Solicitar datos de la api
request(api, (error,response,body)=>{
  if(error){
    console.error(`Error de pedido de la api, ${error.message}`);
    return;
  }
  if(response.statusCode!=200){
    console.error(`La solicitud no tuvo exito ${response.statusCode}`);
    return;
  }
  
  console.log('Procesando lista de peliculas del año 2011:')
  const movies=JSON.parse(body);
  
  // console.log(movies);

  const movies2011=movies.filter(movie=>movie.release_date==2011);
  console.log(movies2011);  

  //Convertir a csv
  const csvData2011=convertirCSV(movies2011);

  //Escribir a csv
  fs.writeFile('callbacksMovies2011.csv',csvData2011, 'utf-8',(error)=>{
    if(error){
      console.error(`No se pudo escribir el archivo: ${error.message}`);
      return;
    }
    console.log(`Peliculas guardadas en callbackMovies2011.csv`);
  });
  
})
