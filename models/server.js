const express = require('express')
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.port =process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';
        //middleweres
        this.middlewers();
        //Rutas de mi aplicacion
        this.routes();
    }
    middlewers(){
        // cors
        this.app.use(cors());
        //lectura y parceo del body
        this.app.use(express.json());
        //Directorio publico
        this.app.use(express.static('puclic'));
    }
    routes(){
          this.app.use(this.usuariosPath, require('../routes/user'));
    }
    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en el puerto ', this.port);
        });
    }

}
module.exports=Server;
