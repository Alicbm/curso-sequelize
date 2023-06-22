const express = require('express')
const app = express();
const sequelize = require('./database/db')

//Puerto
const port = process.env.PORT || 3000

//Rutas
app.get('/', (req, res) => {
  res.send('El pepe sabroson')
})

//Corremos el servidor
app.listen(port, () => {
  console.log('Runing in ' + port);

  // Conectamos a la base de datos
  sequelize.authenticate().then(() => {
    console.log('Nos hemos conectado a la DB');
  }).catch(err => {
    console.log('Se ha producido un error: ' + err);
  })
})
