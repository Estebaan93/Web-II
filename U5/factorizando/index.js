//index.js
var server=require('./server');
var router=require('./router');
var requestHandler=require('./requestHandler');

var handle={};

handle["/"]=requestHandler.index;
handle["/about"]=requestHandler.about;
handle["/contact"]=requestHandler.contact;

server.iniciarServidor(router.route,handle);
