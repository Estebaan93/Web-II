const http= require('node:http');
const hostname='127.0.0.1';
const port= 3000;

const server= http.createServer((req,res)=>{
  res.statusCode= 200;
  res.setHeader('Constent-Type', 'text/plain');
  res.end('Hola mundo');
});

server.listen(port, hostname,()=>{
  console.log(`Servidor escuchando en http://${hostname}:${port}/`);
});
