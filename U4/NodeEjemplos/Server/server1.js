var http=require('http');
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write(req.url);
  console.log(req.url);
  res.end();  
}).listen(3001);
