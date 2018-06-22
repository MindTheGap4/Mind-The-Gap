const router = require('express').Router()
const {Activity} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    console.log('req.user', req.user)
    if (req.user) {
      const activities = await Activity.findAll({
        where: {
          userId: req.user.id
        }
      })
      res.json(activities)
    }
  } catch (err) {
    next(err)
  }
})
