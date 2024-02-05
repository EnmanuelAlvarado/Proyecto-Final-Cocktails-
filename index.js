const express = require('express');
const routerAPI = require('./server/router/index.js');
const cors = require('cors');


//esto es nuestra aplicacion - origen
const app = express();

//esta linea me sirve para quitar el problema de cors y permitir que se conecten dispositivos desde cualquier origen 
app.use(cors());

//esta linea me permite entender los archivos json enviados desde la respuesta
app.use(express.json());

//esta funcion es nuestra API 
routerAPI(app);

//.use sirve para servir en nuestro servidor y recibe n cantidad de parametros, el primero va hacer nuestra ruta en la wed y el segundo middleware (logica cuando vaya o sirva esa ruta)
app.use('/', (req, res)=> {
    //req = solcitud o solicitar
    //res = respuesta o devolver

    res.send("<h1>funciona</h1>")
});

//levantando nuestro servidor en le puerto x

//.listen escucha nuestro servidor y como primer parametro recibe el puerto y como segundo la funcion a mostrar cuando nuestro serivdor funcione.

app.listen(3100, ()=> {
    console.log('Aplicacion corriendo en el puerto 3100')
});