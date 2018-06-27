const router = require('express').Router()
const {User, Event, userEvent} = require('../db/models')
module.exports = router

// router.get('/', async (req, res, next) => {
//   try {
//     const data = await User.findAll({
//       where: {id: req.user.id},
//       include: [Event]
//     })
//     res.json(data)
//   } catch (err) {
//     next(err)
//   }
// })
router.get('/', async (req, res, next) => {
  try {
    const data = await userEvent.findAll({
      where: {userId: req.user.id},
      include: [Event]
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
