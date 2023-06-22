const express = require('express')
const app = express();
const sequelize = require('./database/db')
const User = require('./database/models/User')

//Puerto
const port = process.env.PORT || 3000

//Rutas
app.get('/', (req, res) => {
  //CREAMOS UN USUARIO
  
  // User.create({
  //   username: 'David',
  //   birthday: new Date(2003, 12, 10)
  // }).then(user => {
  //   res.json(user)
  // })

  // vemos a los usuarios
  User.findAll().then(user => res.json(user))

})

//Corremos el servidor
app.listen(port, () => {
  console.log('Runing in ' + port);

  // Conectamos a la base de datos
  // force true: DROP TABLE, borra las tablas
  sequelize.sync({ force: false }).then(() => {
    console.log('Nos hemos conectado a la DB');
  }).catch(err => {
    console.log('Se ha producido un error: ' + err);
  })
})
