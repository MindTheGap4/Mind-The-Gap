const router = require('express').Router()
const {Sponsor} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allSponsors = await Sponsor.findAll()
    res.json(allSponsors)
  } catch (err) {
    next(err)
  }
})

router.get('/singleSponsor/:sponsorId', async (req, res, next) => {
  try {
    const singleSponsor = await Sponsor.findOne({
      where: {id: req.params.sponsorId}
    })
    res.json(singleSponsor)
  } catch (err) {
    next(err)
  }
})
