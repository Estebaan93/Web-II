app.use((req, res, next) => {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next(); // continua la  siguiente middleware o ruta
});

// middleware autenticacion

const autenticacion = (req, res, next) => {
    const usuarioAutorizado = false; // simula cambiar a true para permitir el acceso

    if (usuarioAutorizado) {
        next(); // Usuario permitido, pasa a la siguiente funcion
    } else {
        res.status(403).send('Acceso denegado'); // Codigo HTTP 403: Prohibido
    }
};

// middlewre validacion de datos 

const validarDatos = (req, res, next) => {
    const { nombre, email } = req.body;

    if (!nombre || !email) {
        return res.status(400).send('Faltan datos obligatorios');
    }
    next(); // Si los datos estan completos, sigue a la siguiente funcion
};

app.use(express.json()); // Middleware para analizar JSON en el body

app.post('/registro', validarDatos, (req, res) => {
    res.send('Registro exitoso');
});


// Ruta protegida
app.get('/admin', autenticacion, (req, res) => {
    res.send('Bienvenido al panel de administración');
});



// DIFERENTES RUTAS 

app.get('/usuario', (req, res) => {  // DEVUELVE
    res.send('Obteniendo usuario');
});

app.post('/usuario', (req, res) => {  // CREA
    res.send('Creando usuario');
});

app.put('/usuario/:id', (req, res) => {  // ACTUALIZA
    res.send(`Actualizando usuario con ID ${req.params.id}`);
});

app.delete('/usuario/:id', (req, res) => {  // ELIMINA
    res.send(`Eliminando usuario con ID ${req.params.id}`);
});


// ERRORES

app.use((req, res, next) => {
    const err = new Error('Página no encontrada'); // se crea error
    err.status = 404;
    next(err); // envia el error al siguiente middleware
});

// Middleware para manejar errores
app.use((err, req, res, next) => {  // obj error, obj solicitud, obj respuesta, llama siguiente middle
    res.status(err.status || 500); // 500 (error interno del servidor).
    res.json({
        error: {
            message: err.message
        }
    });
});


const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/datos', (req, res) => {
    console.log(req.body); // Imprime el JSON recibido
    res.send('Datos recibidos');
});


// rutas
const express = require('express');
const router = express.Router();
const usuarioController = require('../controladores/usuarioController');

router.get('/', usuarioController.obtenerUsuarios);
router.post('/', usuarioController.crearUsuario);
router.put('/:id', usuarioController.actualizarUsuario);
router.delete('/:id', usuarioController.eliminarUsuario);

module.exports = router;


// controller
exports.obtenerUsuarios = (req, res) => {
    res.send('Obteniendo usuarios');
};

exports.crearUsuario = (req, res) => {
    res.send('Creando usuario');
};

exports.actualizarUsuario = (req, res) => {
    res.send(`Actualizando usuario con ID ${req.params.id}`);
};

exports.eliminarUsuario = (req, res) => {
    res.send(`Eliminando usuario con ID ${req.params.id}`);
};



// co figuracion servidor

const express = require('express');
const app = express();
const port = 3000;
const usuarioRutas = require('./rutas/usuario');

app.use('/usuario', usuarioRutas);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
