const express = require('express')
const router = express.Router()
const Post = require('../database/models/Post')
const User = require('../database/models/User')

//INDEX
router.get('/',(req, res) =>{
  Post.findAll({
    include: {
      model: User,
      as: 'autor',
      attributes: ['username']
    }
  }).then(post => {
    res.json(post)
  })
})

// CREATE
router.post('/', (req, res) => {
  const { title, body } = req.body
  Post.create({
    title,
    body
  }).then(post => {
    res.json(post)
  })
})

//READ
router.get('/:id',(req, res) =>{
  Post.findByPk(req.params.id).then(post => {
    res.json(post)
  })
})

//UPDATE
router.patch('/:id', (req, res) => {
  const { title, body } = req.body

  Post.update({
    title,
    body
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
  Post.destroy({
    where: {
      id: req.params.id
    }
  }).then(post => {
    res.json(post)
  })
})


module.exports = router