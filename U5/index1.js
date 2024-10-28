var http= require('http');
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write('Hola mundo');
  res.end();
}).listen(3000);

console.log(`Servidor iniciado en el puerto 3000`)