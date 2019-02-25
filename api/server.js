var express = require('express');
var productos = require('./utils/productos')

var servidor = express();

servidor.get('/cono-david', function (req, res) {
  res.status(200).send('Hola marico como estas');
});

servidor.get('/productos', function (request, response) {
  // PETICION DE DATOS A LA BD -> productos 

  response.status(200).json(productos)
})

// http://localhost:3000/productos/3
servidor.get('/productos/:productId', function (request, response) {
  console.log(request.params);

  var productId = request.params.productId;

  var producto = productos.filter(function (elemento) {
    return elemento.id == productId
  })

  response.status(200).json(producto)

});

servidor.listen(3000, function() {
  console.log('HOla, soy el servidor y estoy corriendo en el puerto 3000');
});

potsgres -> pg
mysql -> mysql

var basededatos = require('postgres')
var postgres = new basededatos(usuario, password, nombre, puerto)

var data = postgres.query('SELECT * FROM users')
data = data.toJSON();


