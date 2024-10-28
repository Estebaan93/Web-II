//handlerRequest.js
function index(response, request) {
response.writeHead(200, {"Content-Type": "text/html"});
response.write(`<h1> Pagina principal </h1>`);
response.end();
}
function about(response, request) {
response.writeHead(200, {"Content-Type": "text/html"});
response.write(`<h1> Bienvenidos acerca de la pagina </h1>`);
response.end();
}
function contact(response,request){
response.writeHead(200, {"Content-Type": "text/html"});
response.write(`<h1> Bienvenidos a contacto </h1>`);
response.end();
}
exports.index=index;
exports.about = about;
exports.contact = contact;