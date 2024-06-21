const path=require('path');

//App para requerir modulos cuando la carpeta esta a un nivel superior
require('app-module-path').addPath(path.join(__dirname, '..', 'node_modules'));
const express = require('express');


const app=express();
const PORT=3020;

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

//Ruta principal
app.get('/', (req, res)=>{
	res.render('index');
});

//Inicial el servidor
app.listen(PORT, ()=>{
	console.log(`Servidor iniciado en el puerto ${PORT}`);
})