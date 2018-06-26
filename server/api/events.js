const router = require('express').Router()
const {Event} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const events = await Event.findAll() //get sponsor name and image
    res.json(events)
  } catch (err) {
    next(err)
  }
})

router.get('/bySponsor/:sponsorId', async (req, res, next) => {
  try {
    const events = await Event.findAll({
      where: {sponsorId: req.params.sponsorId}
    })
    res.json(events)
  } catch (err) {
    next(err)
  }
})
