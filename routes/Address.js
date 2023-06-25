const express = require('express')
const router = express.Router()
const Post = require('../database/models/Address')
const User = require('../database/models/User')

//INDEX
router.get('/',(req, res) =>{
  Post.findAll({
    //asi agregamos las relaciones antes creadas
    //include: ['user']

    //otra forma de agregar la relacion pero especificando los campos que qeuremos mostar de esa nueva info
    include: {
      model: User,
      as: 'residente',
      attributes: ['username', 'email', 'age']
    },
  }).then(addres => {
    res.json(addres)
  })
})

// CREATE
router.post('/', (req, res) => {
  const { street } = req.body
  Post.create({
    street
  }).then(address => {
    res.json(address)
  })
})

//READ
router.get('/:id',(req, res) =>{
  Post.findByPk(req.params.id).then(address => {
    res.json(address)
  })
})

//UPDATE
router.patch('/:id', (req, res) => {
  const { street } = req.body

  Post.update({
    street
  }, {
    where: {
      id: req.params.id
    }
  }).then(address => {
    res.json(address)
  })
})

//DELETE
router.delete('/:id', (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  }).then(address => {
    res.json(address)
  })
})


module.exports = router