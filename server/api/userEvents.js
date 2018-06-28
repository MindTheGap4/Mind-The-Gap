const router = require('express').Router()
const {User, Event, UserEvent} = require('../db/models')
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
  console.log('WHOA LETS GET THINGS')
  try {
    const data = await UserEvent.findAll({
      where: {userId: req.user.id},
      include: [Event]
    })
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const data = await UserEvent.create({
      userId: req.user.id,
      eventId: req.body.eventId
    })
    console.log(data)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    console.log('req.user', req.user)
    console.log('req.body', req.body)
    const eventToUpdate = await UserEvent.findOne({
      where: {eventId: req.body.event.event.id, userId: req.user.id}
    })
    console.log('eventtoupdate', eventToUpdate)
    const updatedEvent = await eventToUpdate.update({
      status: req.body.status
    })
    const eventToReturn = {
      ...updatedEvent.dataValues,
      event: req.body.event.event
    }
    res.json(eventToReturn)
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
