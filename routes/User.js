const express = require('express')
const router = express.Router()
const User = require('../database/models/User')
const Address = require('../database/models/Address')

//INDEX
router.get('/',(req, res) =>{
  User.findAll({
    //asi agregamos las relaciones antes creadas
    //include: 'address',
    
    //otra forma de agregar la relacion pero especificando los campos que qeuremos mostar de esa nueva info
    include: {
      model: Address,
      // cuando le ponemos un alias en la relacion (associate) debemos poner el mismo alias acá
      as: 'domicilio',
      attributes: ['street']
    },

    // aca especificamos los campos que queremos mostrar
    // si no ponemos nada se muestran todos los campos
    attributes: [ "username", "email", "age" ]
  }).then(post => {
    res.json(post)
  })
})

// CREATE
router.post('/', (req, res) => {
  const { 
    username,
    email,
    age,
    role,
   } = req.body
  User.create({
    username,
    email,
    age,
    role,
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