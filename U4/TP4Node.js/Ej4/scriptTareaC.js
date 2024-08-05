/*c.- Modifique el programa para que este guarde en un archivo
callbackMoviesLocations.json los datos de las películas liberadas después del
2000 junto con los lugares donde fueron grababas las diferentes escenas. (Solo
nombre de las películas y nombres de los lugares).*/

const request=require('request');
const fs=require('fs');
const {api}=require('./convertirCSVapi');
const { rejects } = require('assert');


//Solicitar datos de la api
request(api, (error,response,body)=>{
  if(error){
    console.error(`Error del pedido de la api: ${error.message}`);
    return;
  }
  if(response.statusCode!=200){
    console.error(`La solicitud no tuvo exito: ${error.statusCode}`);
    return;
  }

  console.log("Procesando datos de la API..");
  const movies=JSON.parse(body);
  // movies.forEach(movie=>{
  //   console.log(`titulo ${movie.title} año ${movie.release_date}`);
  // });

  console.log("");
  //Peliculas mayores al 2000
  console.log("Filtramos mayores a 2000:");
  
  const movies2000=movies.filter(movie=>movie.release_date>2000);
  movies2000.forEach(data=>{
    console.log(`Nombre: ${data.title}, ID: ${data.id}`)
    data.locations.forEach(ubicacionURL=>{
      request(ubicacionURL,(error,response,body)=>{
        const ubicacion=JSON.parse(body);
        // console.log(ubicacion);
        ubicacion.forEach(ubi=>{
          console.log(`Ubicacion: ${ubi.name} pertenece a ${ubi.id}, films: ${ubi.films}`);
        })
        // console.log(`Ubicacion: ${ubicacion.name}`);
      })
    })
    // console.log(data.title, data.release_date, data.locations);
  })

   console.log("");
 });
