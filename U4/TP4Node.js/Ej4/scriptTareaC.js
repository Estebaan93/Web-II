/*c.- Modifique el programa para que este guarde en un archivo
callbackMoviesLocations.json los datos de las películas liberadas después del
2000 junto con los lugares donde fueron grababas las diferentes escenas. (Solo
nombre de las películas y nombres de los lugares).*/

const request = require('request');
const fs = require('fs');
const { api } = require('./convertirCSVapi');

// Solicitar los datos de las películas desde la API
request(api, (error, response, body) => {
 if (error) {
     console.error(`Error al realizar la solicitud a la API: ${error.message}`);
     return;
 }
 if (response.statusCode !== 200) {
     console.error(`La solicitud no tuvo éxito: ${response.statusCode}`);
     return;
 }

 console.log("Procesando datos de la API...");
 const movies = JSON.parse(body);

 // Filtrar las películas lanzadas después del año 2000
 const movies2000 = movies.filter(movie => parseInt(movie.release_date) > 2000);
 movies2000.forEach(data=>{
   console.log(`Titulo: ${data.title}, Año: ${data.release_date}`);
 });

 // Solicitar las ubicaciones desde la API
 const apiUbicaciones='https://ghibliapi.vercel.app/locations/'; 
 request(apiUbicaciones, (error, response, body) => {
     if (error) {
         console.error(`Error al realizar la solicitud de ubicaciones: ${error.message}`);
         return;
     }
     if (response.statusCode !== 200) {
         console.error(`La solicitud de ubicaciones no tuvo éxito: ${response.statusCode}`);
         return;
     }

     console.log("Procesando datos de ubicaciones...");
     const allLocations = JSON.parse(body);

     // Crear un array para almacenar los resultados finales
     const resultadoFinal = [];

     // Relacionar películas con sus ubicaciones
     movies2000.forEach(movie => {
         const ubicaciones = allLocations
             .filter(location => location.films.includes(movie.url))
             .map(location => location.name);

         // Agregar película con sus ubicaciones al resultado final
         resultadoFinal.push({
             nombre: movie.title,
             ubicaciones: ubicaciones
         });
     });
    console.log(`Imprimimos las peliculas:`);
    resultadoFinal.forEach(data=>{
      console.log(data);
    })
     // Guardar el resultado final en un archivo JSON
     fs.writeFile('callbackMoviesLocations.json', JSON.stringify(resultadoFinal, null, 2), (err) => {
         if (err) {
             console.error(`Error al escribir en el archivo: ${err.message}`);
         } else {
             console.log("Datos guardados en callbackMoviesLocations.json");
         }
     });
 });
});
