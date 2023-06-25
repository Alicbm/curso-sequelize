const sequelize = require('./database/db')
const User = require('./database/models/User')
const Post = require('./database/models/Post')
const Address = require('./database/models/Address')
require('./database/associate')

const userData = [
  { username: 'alic', email: 'alic@mail.com', age: 19, role: 1},
  { username: 'david', email: 'david@mail.com', age: 29, role: 0},
  { username: 'luis', email: 'luis@mail.com', age: 17, role: 0},
  { username: 'pepe', email: 'pepe@mail.com', age: 45, role: 0},
]

const addressData = [
  {street: 'calle 1', residente_id: 1},
  {street: 'calle 2', residente_id: 2},
  {street: 'calle 3', residente_id: 3},
  {street: 'calle 4', residente_id: 4},
]

const postData = [
  {title: 'title 1', body: 'body 1', autor_id: 1},
  {title: 'title 2', body: 'body 2', autor_id: 2},
  {title: 'title 3', body: 'body 3', autor_id: 3},
  {title: 'title 4', body: 'body 4', autor_id: 4},
]

sequelize.sync({ force: false }).then(() => {
  //conexion establecida
  console.log('Conexioon establecida...');
}).then(() => {
  //rellenar usuarios
  // userData.forEach(user => User.create(user))
}).then(() => {
  //rellenar address
  // addressData.forEach(address => Address.create(address))
}).then(() => {
  //rellenar posts
  postData.forEach(post => Post.create(post))
})

