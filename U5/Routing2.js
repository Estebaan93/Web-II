const http= require("http");
http.createServer(function(req,res){
  res.writeHead(200,{'content-type': 'text/html'});
  var url=req.url;
  if(url==='/about'){
    res.write(`Bienvenido acerca de la pagina<br>`);
    res.write(`<a href="/contact">Ir a contacto</a><br>`);
    res.write(`<a href="/">Volver a inicio</a>`);
    res.end();
  }else if(url==='/contact'){
    res.write(`Contacto de la pagina<br>`);
    res.write(`<a href="/about">Ir acerca de la pagina</a><br>`);
    res.write(`<a href="/">Volver a inicio</a>`);
    res.end();
  }else{
    res.write(`Hola mundo, pagina principal. <br>`);
    res.write(`<a href="/contact">Ir a contacto</a><br>`);
    res.write(`<a href="/about">Ir acerca de la pagina</a><br>`);    
    res.end();
  }
}).listen(3004);
console.log("Servidor iniciado en el puerto 3004")