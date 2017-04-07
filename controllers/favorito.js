'use strict'

var  Favorito = require('../models/favorito');

//Solo contiene la funcion que controla los datos que se van a obtener, siempre recibe un parametro request (req) y uno response (res)
//req contiene información del objeto que lo está llamando
function prueba (req, res){
  if (req.params.nombre) {
    var nombre = req.params.nombre;
  }
  else {
    var nombre = "NO AVALIDABLE"
  }
  //res es el objeto mediante el cual se mandan respuestas, en este caso devuelve un status (siempre es 200) y send genera la respuesta
  //Send es un metodo que lleva como argumento un json con los datos
  res.status(200).send({
    datos:[1,2,3],
    message:"Hola",
    nombre: nombre.toUpperCase(),
  })
};

function getFavorito (req, res){
  var favoritoId = req.params.id;
  Favorito.findById(favoritoId, function(err, favorito){
    if(err){
      res.status(500).send({
        message:"Error en la base"
      });
    }else{
      if (!favorito) {
        res.status(404).send({
          message:"No hay marcador"
        });
      }
      else {
        res.status(200).send({
          favorito,
        });
      }
    }
  });
};

function getFavoritos (req, res){

  Favorito.find({}).sort('title').exec((err, favoritos) => {
    if (err) {
      res.status(500).send({error:"Error"});
    }
    else if (!favoritos) {
      res.status(404).send({
        error:"No hay"
      });
    }
    else{
      res.status(200).send({
        favoritos: favoritos,
      });
    }
  })


};

function saveFavorito (req, res){
  var favorito = new Favorito();
  var params = req.body;

  favorito.title = params.title;
  favorito.descripcion = params.descripcion;
  favorito.url = params.url;
  favorito.save((err, FavoritoStored)=>{
    if(err){
      res.status(500).send({
        message:"Error en servidor"
      });
    }
    else{
      res.status(200).send(FavoritoStored);
    }
  });

};

function updateFavorito (req, res){
  var favoritoId = req.params.id;
  var update = req.body;
  //console.log(update);
  Favorito.findByIdAndUpdate(favoritoId, update, function(err,favoritoUpdated){
    if(err){
      res.status(500).send({message:"Problemas"});
    }else{
      res.status(200).send({message:"Marcador guardado", favorito: favoritoUpdated});
    }
  });
};

function deleteFavorito (req, res){
  var favoritoId = req.params.id;
  Favorito.findById(favoritoId, (err, favorito)=>{
    if(err){
      res.status(500).send({message:"Error en la base"});
    }else if (!favorito) {
      res.status(404).send({message:"There is not such mark"});
    }else{
      favorito.remove(function(err){
        if(err){
          res.status(500).send({message:"Error en la base"});
        }
        else {
          res.status(200).send({message:"Eliminado"});
        }
      });
    }
  });
};

//forma de exportar modulos para que puedan ser llamados
module.exports = {
  prueba,
  getFavorito,
  getFavoritos,
  saveFavorito,
  updateFavorito,
  deleteFavorito,
}
