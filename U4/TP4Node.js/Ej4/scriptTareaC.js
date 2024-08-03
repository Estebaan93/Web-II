/*c.- Modifique el programa para que este guarde en un archivo
callbackMoviesLocations.json los datos de las películas liberadas después del
2000 junto con los lugares donde fueron grababas las diferentes escenas. (Solo
nombre de las películas y nombres de los lugares).*/

const request=require('request');
const fs=require('fs');
const {api}=require('./convertirCSVapi');
const { rejects } = require('assert');

//Solicitar datos de una URL
function fetchData(url){
  return new Promise((resolve,reject)=>{
    request(url,(error,response,body)=>{
     if(error){
       return reject(error);
     } 
     if(response.statusCode!==200){
       return reject(new Error(`HTPP status code: ${response.statusCode}`));
     }
     resolve(JSON.parse(body));
    }); 
  });
}


//Solicitar datos de la api
request(api, async(error,response,body)=>{
  if(error){
    console.error(`Error del pedido de la api: ${error.message}`);
    return;
  }
  if(Response.statusCode!=200){
    console.error(`La solicitud no tuvo exito: ${error.statusCode}`);
    return;
  }

  console.log("Procesando datos de la API..");
  const movies=JSON.parse(body);
  movies.forEach(movie=>{
    console.log(`titulo ${movie.title} año ${movie.release_date}`);
  });

  console.log("");
  //Peliculas mayores al 2000
  const movies2000=movies.filter(movie=>movie.release_date>2000);
  movies2000.forEach(data=>{
    console.log(data.title, data.release_date);
  })

   console.log("");
   
  //Array para almacenar las peliculas y sus localizaciones
  const localizacionesPeliculas=[];

   //Iterar sobre las peliculas y obtener la api de localizacion
   for(const data of movies2000){
     const dataMovie={
       title:data.title,
       locations: []
     };
    
    //Obtener datos de las localizaciones
    for(const urlLocalizaciones of data.locations){
      try{
        const locationsData= await fetchData(urlLocalizaciones);
        dataMovie.locations.push(locationsData.name);
      }catch(fetchError){
        console.error(fetchError);
      }
    }
    localizacionesPeliculas.push(dataMovie);
     
   }  

  console.log(localizacionesPeliculas);
    
});
