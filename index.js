'use stric'

//Se importa express que es el server
var express = require('express');
//Se importa /app que es el archivo encargado de leer la url y cargar las rutas
var app = require('./app');
//Port solo es el numero del puerto donde escuchará peticiones el servidor
var port = process.env.PORT || 8000;

//Se conectacon MongoDB mediante el modulo Mongoose
var mongoose = require('mongoose');
//conexion

mongoose.connect('mongodb://localhost:27017/curso', (err, res) => {
  if(err){
    throw err;
  }else{
console.log("Exito con la base");
    //App
    app.listen(port,function(){
      console.log("Hola Mundo Express escuchando en el puerto " + port);
    })
  }
});
