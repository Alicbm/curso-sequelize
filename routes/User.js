const express = require('express')
const router = express.Router()
const User = require('../database/models/User')
const Address = require('../database/models/Address')
const Post = require('../database/models/Post')

//INDEX
router.get('/',(req, res) =>{
  User.findAll({
    //asi agregamos las relaciones antes creadas
    //include: 'address',
    
    //otra forma de agregar la relacion pero especificando los campos que qeuremos mostar de esa nueva info
    include: [
      {
        model: Address,
        // cuando le ponemos un alias en la relacion (associate) debemos poner el mismo alias acá
        as: 'domicilio',
        attributes: ['street']
      },{
        model: Post,
        as: 'publicaciones',
        attributes: ['title', 'body'],
        // where: {
        //   title: 'title 1'
        // }
      }
    ],

    // aca especificamos los campos que queremos mostrar
    // si no ponemos nada se muestran todos los campos
    attributes: [ "id", "username", "email", "age" ]
  }).then(post => {
    res.json(post)
  })
})

//ver la direccion de usuario --> /api/users/:id/domicilio
router.get('/:id/domicilio', (req, res) => {
  const { id } = req.params;
  User.findByPk(id).then(user => {

    //se usa get + el atributo que queramos mostrar, en este caso queremos a domicilio
    // vemos el domicilo del user que elijamos (id)
    user.getDomicilio().then(dom => {
      res.json(dom)
    })
  })
})

//ver la direccion de usuario --> /api/users/:id/posts
router.get('/:id/posts', (req, res) => {
  const { id } = req.params;
  User.findByPk(id).then(user => {

    //se usa get + el atributo que queramos mostrar, en este caso queremos a domicilio
    // vemos los posts del usuario que elijamos(id)
    user.getPublicaciones().then(dom => {
      res.json(dom)
    })
  })
})


// CREATE
router.post('/', (req, res) => {
  const { 
    username,
    email,
    age,
    role,
    //elemento que se une con user en las foreignkey, y asi se crea de una vez
    street
   } = req.body
  User.create({
    username,
    email,
    age,
    role,
    //elemento que se une con user en las foreignkey, y asi se crea de una vez
    domicilio: {
      street,
    }
  }).then(post => {
    res.json(post)
  }).catch(err => {
    res.json(err)
  })
})

//READ
router.get('/:id',(req, res) =>{
  User.findByPk(req.params.id).then(post => {
    res.json(post)
  })
})

//UPDATE
router.patch('/:id', (req, res) => {
  const { 
    username,
    email,
    age,
    role,
   } = req.body

  User.update({
    username,
    email,
    age,
    role,
  }, {
    where: {
      id: req.params.id
    }
  }).then(post => {
    res.json(post)
  })
})

//DELETE
router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  }).then(post => {
    res.json(post)
  })
})


module.exports = router