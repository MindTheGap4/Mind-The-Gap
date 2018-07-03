const router = require('express').Router()
const {Point} = require('../db/models')
module.exports = router

router.get('/allUsersPoints', async (req, res, next) => {
  try {
    const allPoints = await Point.findAll({
      where: {
        month: new Date().getMonth(),
        year: new Date().getFullYear()
      }
    })
    res.json(allPoints)
  } catch (err) {
    next(err)
  }
})

router.get('/currentPoints', async (req, res, next) => {
  try {
    if (req.user) {
      const points = await Point.findOrCreate({
        where: {
          month: new Date().getMonth(),
          year: new Date().getFullYear(),
          userId: req.user.id
        }
      })
      res.json(points[0])
    } else {
      res.json('no user')
    }
  } catch (err) {
    next(err)
  }
})

router.get('/allPoints', async (req, res, next) => {
  try {
    if (req.user) {
      const allPoints = await Point.findAll({
        where: {
          userId: req.user.id
        }
      })
      res.json(allPoints)
    } else {
      res.json('no user')
    }
  } catch (err) {
    next(err)
  }
})

router.put('/addPoints', async (req, res, next) => {
  try {
    const points = await Point.findOne({
      where: {
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
        userId: req.user.id
      }
    })
    const updatedPoints = await points.update({
      totalEarned: points.totalEarned + req.body.points
    })
    res.json(updatedPoints)
  } catch (err) {
    next(err)
  }
})

router.put('/addGoal', async (req, res, next) => {
  console.log('INCOMING PUT REQUEST FOR GOAL POINTS', req.body)
  try {
    const points = await Point.findOne({
      where: {
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
        userId: req.user.id
      }
    })
    const updatedGoal = await points.update({
      goal: req.body.goal
    })
    res.json(updatedGoal)
  } catch (err) {
    next(err)
  }
})
