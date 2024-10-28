const http= require('http');
http.createServer((request, response)=>{
  if(request.method==='GET' && request.url==="/home"){
    response.writeHead(200,{"content-type":"text/html"});
    response.write("<h3>Bienvenidos a mi sitio</h3>");
    response.end();
  }else{
    response.statusCode=404;
    response.write(`<a href="/home"> Ir a home</a>`);
    response.end();
  }
}).listen(3003);

console.log(`Servidor iniciado en el puerto 3003`);