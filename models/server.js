const express = require('express');
var cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        // Middlewares
        this.middlewares();

        // Rutas de mi app
        this.routes();
    }

    // Middlewares
    middlewares() {
        // Cors
        this.app.use(cors());
        // Parse y lectura del body
        this.app.use(express.json());
        // Directorio público
        this.app.use(express.static('public'));
    }

    // Rutas de mi app
    routes() {

        this.app.use(this.usuariosPath, require('../routes/usuarios'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;