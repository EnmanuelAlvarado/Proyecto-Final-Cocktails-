const express = require('express');

// express tiene un metodo que funciona como enrutador para enlazar todas nuestras rutas de nuestra aplicacion (localhost:3100/)
const router = express.Router();

//esta funcion define nuestras rutas de API que me permiten conectar mi parte visual (hmtl) con mi servidor de (nodejs)
function routerAPI(app){
    app.use('/api/v1', router);
};

//vamos a exportar nuestra funcion para utilizarla en nuestro index.js principal del server

module.exports = routerAPI; 
