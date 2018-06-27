const router = require('express').Router()
const {userEvent, Event} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const data = await userEvent.findAll({
      where: {userId: req.user.id}
    })
    res.json(data)
  } catch (err) {
    next(err)
  }
})

// router.post('/', async (req, res, next) => {
//   try {
//     const data = await userEvent.create(req.body)
//     res.json(data)
//   } catch (err) {
//     next(err)
//   }
// })
