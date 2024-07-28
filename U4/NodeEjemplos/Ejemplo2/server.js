//server.js en http basico
// var http=require('http');

/*http.createServer(function(request, response){
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("Hola mundo, creamos un servidor desde http");
  response.end();
  
}).listen(3000);*/
//----------------------------------------------------------
//Iniciamos el servidor y podemos exportar la funcion
/*
function start(){
  function onRequest(request, response){
    console.log("Respuesta recibida");
    response.writeHead(200,{"Content-type":"text/plain"});
    response.write(`Hola mundo, importamos el servidor e iniciamos en el puerto ${port}`);
    response.end();
    
  }
  const port=3001;
  http.createServer(onRequest).listen(port);
  // console.log("Servidor iniciado en el puerto", port);
  
}

exports.start=start; */

/*De esta manera, ahora podemos crear nuestro archivo principal index.js e iniciar nuestro
HTTP allí, aunque el código del servidor todavía está en nuestro archivo server.js.*/

//----------------------------------------------------------
//Añadimos el router.js
// var url=require('url');

var http = require('http');
var url = require('url');
var querystring = require('querystring');

function start(route, handle) {
  function onRequest(request, response) {
    var parsedUrl = url.parse(request.url);
    var pathname = parsedUrl.pathname;
    var query = querystring.parse(parsedUrl.query);

    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, query);
  }
  
  const port = 3001;
  http.createServer(onRequest).listen(port);
  console.log("Server has started on port " + port);
}

exports.start = start;

