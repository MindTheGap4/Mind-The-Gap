const router = require('express').Router()
const axios = require('axios')

module.exports = router

router.get('/:searchTerm/:name', async (req, res, next) => {
  try {
    const response = await axios({
      method: 'get',
      url: `http://data.orghunter.com/v1/charitysearch?user_key=${
        process.env.ORG_KEY
      }&${req.params.searchTerm}=${req.params.name}`
    })
    const orgInfo = response.data.data.map(organization => {
      return {
        charityName: organization.charityName,
        url: organization.url,
        donationUrl: organization.donationUrl,
        city: organization.city,
        state: organization.state,
        zipCode: organization.zipCode,
        category: organization.category
      }
    })

    res.json(orgInfo)
  } catch (err) {
    next(err)
  }
})
