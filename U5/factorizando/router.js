//router.js
function route(handle, req, res){
  let direccion= req.url;
  if(typeof handle[direccion]==='function'){
    handle[direccion](res,req);
  }else{
    console.log(`No se encontro un controlador para la direccion ${direccion}`);
    res.writeHead(404, {"Content-Type": "text/html"});
    res.write("404 Not found");
    res.end();
  }
}

exports.route=route;