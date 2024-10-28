var http=require('http');
const server= http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type': 'text/html'});
  res.write(`<doctype html><html><head></head><body><h1> Sitio en desarrollo </h1></body></html>`);
  res.end();
})

server.listen(3001);
console.log(`Servidor iniciado en puerto 3001`);