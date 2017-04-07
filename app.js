//App.js es el mapeador de rutas, utiliza express para responder peticiones y bodyparser para poder leer la ruta desde la URL

'use strict'

//Se necesita Express para poder responder las peticiones
var express = require('express');

//Se necesita bodyparser para poder leer la url
var bodyparser = require('body-parser');

//Se hacer una instancia de Express
var app = express();

//Se importa el archivo que tiene la funcion que se va a ejecutar
var api = require('./routes/favorito');

//Se lee la URL
//app.use es una utilidad de express para cargar middleware
app.use(bodyparser.urlencoded({extended:false}));
//Se fija el tipo de objeto que va a ser devuelto
app.use(bodyparser.json());

app.use((req, res, next)=>{

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();

});
//Se devuelve el objeto
//El primer argumento es el nombre y es como va a ser leido en la url ej: localhost:8000/api
//El segundo argumento es el nombre del objeto que se va a ejecutar cuando se llame a '/api'
app.use('/api', api)

module.exports = app;
