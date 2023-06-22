const express = require('express')
const app = express();
const sequelize = require('./database/db')
const User = require('./database/models/User')

//Puerto
const port = process.env.PORT || 3000

//Middelware
//Para poder rellenar el req.body
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Rutas
app.get('/', (req, res) => {
  res.json('Hola mundo')

})

app.use('/api/post', require('./routes/Post'))

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
