const router = require('express').Router()
const {State} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const data = await State.findAll()
    res.json(data)
  } catch (err) {
    next(err)
  }
})
