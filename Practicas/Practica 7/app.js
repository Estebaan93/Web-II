const express= require('express');
const path= require('path');

const app=express();
const PORT=process.env.PORT || 3000;

// Configura Pug como motor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.render('index');
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});