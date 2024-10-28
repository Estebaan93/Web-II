const express=require('express');
const path=require('path');
const {obtenerInfo}=require('./controlador/systemController');

const app=express();
const PORT=3000;

app.use(express.static(path.join(__dirname,'public')));

app.get('/system-info',obtenerInfo);

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'public','index.html'));
});

app.listen(PORT,()=>{
  console.log('Servidor escuchando en el puerto ',PORT);
})
