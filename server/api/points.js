const router = require('express').Router()
const {Point} = require('../db/models')
module.exports = router

router.get('/currentPoints', async (req, res, next) => {
  try {
    if (req.user) {
      const points = await Point.findAll({
        where: {month: new Date().getMonth(), year: new Date().getFullYear()}
      })
      res.json(points)
    }
  } catch (err) {
    next(err)
  }
})
