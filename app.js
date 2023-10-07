const express = require('express');
const app = express();

app.use(express.static(__dirname));


// Array para almacenar los registros del middleware
const registros = [];

// Middleware personalizado
app.use((req, res, next) => {
    // Registra información sobre la solicitud en el array
    const registro = {
        fecha: new Date(),
        url: req.url,
        metodo: req.method
    };
    registros.push(registro);
    
    // Pasa la solicitud al siguiente middleware en el ciclo de solicitud-respuesta
    next();
});

// Rutas y controladores
app.get('/', (req, res) => {
    res.send('¡Bienvenido!');
});

// Ruta para obtener registros en formato JSON
app.get('/registros', (req, res) => {
    res.json(registros);
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
