const http= require('node:http'); //Protocola http

const puerto= process.env.PORT ?? 3000;

const procesarRequest= (req, res)=>{
  if(req.url=='/'){
    res.statusCode=200; //OK
    res.setHeader('Content-type', 'text/plain; charset=utf-8'); //Asigna la codificacion
    res.end('Bienvenido a la página de inicio');
  }
};

const server= http.createServer(procesarRequest);

server.listen(puerto,()=>{
  console.log(`Server escuchando en el puerto http://localhost:${puerto}`)
})

