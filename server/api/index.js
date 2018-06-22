const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/organizations', require('./organizations'))
router.use('/representatives', require('./representatives'))
router.use('/states', require('./states'))
router.use('/activity', require('./activity'))
router.use('/points', require('./points'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
