// Considere el código que lista las películas de la API del sitio Studio Ghibli

const request = require('request');
request('https://ghibliapi.vercel.app/films', (error,response,body) => {
  if (error) {
    console.error(`Could not send request to API: ${error.message}`);
    return;
  }
  if (response.statusCode != 200) {
    console.error(`Expected status code 200 but received
${response.statusCode}.`);
    return;
  }
  console.log('Processing our list of movies');
  movies = JSON.parse(body);
  movies.forEach(movie => {
    console.log(`${movie.title}, ${movie.release_date}`);
  });
}); 
/*¿Cuáles són los párametros del callback? los parametros son el error,response y body
Error: Un objeto que da error si falla la solicitud
Response: Un objeto de respuesta HTTP que contiene infomacion sobre respuesta codigo de estado y los encabezados
Body: 

¿Cual es el contenido de error y body si el request falla?
Si la solicitud falla el parametro 'error' contendra un objeto que describe error. El body generalmente contendra 'undefined' o 'null' porque no se
pudo recuperar nigun dato con el servidor.

¿Dónde se encuentran almacenados los datos si el request es exitoso?
Si el resultado es exitoso los datos estaran guardados en el parametro del callbak 'body'.

¿En que formato vienen los datos recuperados? 
En formato JSON
*/
