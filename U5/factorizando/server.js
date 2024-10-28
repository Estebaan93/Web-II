//server.js
var http=require ('http');
var url=require ('url');

function iniciarServidor(route,handle){
  function escucharSolicitud(request,response){
    route(handle,request,response);
    }
  http.createServer(escucharSolicitud).listen(3005);
  console.log("Servidor iniciado en el puerto 3005");
  
}
exports.iniciarServidor=iniciarServidor;