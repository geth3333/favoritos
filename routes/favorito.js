'use sctric'

//Se ocupa express para generar respuestas
var express = require('express');

//Se llama al controlador que va a generar las acciones cuando se llame a esta ruta
var FavoritoController = require('../controllers/favorito');
//Se genera un objeto capás de regresar una ruta completa
var api = express.Router();

//Se especifica la ruta con la que se va a trabajar y la funcion que se va a ejecutar
api.get('/prueba/:nombre?', FavoritoController.prueba);
api.get('/favorito/:id', FavoritoController.getFavorito);
api.get('/favoritos', FavoritoController.getFavoritos);
api.post('/favorito', FavoritoController.saveFavorito);
api.put('/favorito/:id', FavoritoController.updateFavorito);
api.delete('/favorito/:id', FavoritoController.deleteFavorito);

//Se exporta api para que pueda ser llamada desde otra ubicacion
module.exports = api;
