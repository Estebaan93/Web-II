const http=require('http');
http.createServer((req,res)=>{
  const {method,url,headers}=req;
  res.writeHead(200,{"content-type":"text/html"});
  res.write(`Method: ${method}\n`);
  res.write(`Url: ${url}\n`)
  res.end(`Headers: ${JSON.stringify(headers)}\n`);
}).listen(3002);

console.log(`Servidor iniciado en el puerto 3002`)