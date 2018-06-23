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
    } else {
      res.json('no user')
    }
  } catch (err) {
    next(err)
  }
})

router.post('/representatives', async (req, res, next) => {
  try {
    //name of rep, category: rep, date, location, hours: null, dollars: null, status: past, points: 5,
    const newActivity = await Activity.create({
      name: req.body.name /** */,
      category: 'contact representative',
      date: new Date(),
      location: req.body.location, //** */
      status: 'past',
      link: req.body.link,
      points: 5,
      userId: req.user.id
    })
    res.json(newActivity)
  } catch (err) {
    next(err)
  }
})
