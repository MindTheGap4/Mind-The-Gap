const router = require('express').Router()
const axios = require('axios')

module.exports = router

router.get('/:searchTerm/:name', async (req, res, next) => {
  try {
    // const api_key = 'e81bd7f2ba3feabb9808165b50fa89a3'
    const response = await axios({
      method: 'get',
      url:
        `http://data.orghunter.com/v1/charitysearch?user_key=e81bd7f2ba3feabb9808165b50fa89a3&${req.params.searchTerm}=${req.params.name}`
      // params: {
      //   'name': req.query
      // }
    })
    const orgInfo = response.data.data.map(organization => {
      return ({
        charityName: organization.charityName,
        url: organization.url,
        donationUrl: organization.donationUrl,
        city: organization.city,
        state: organization.state,
        zipCode: organization.zipCode,
        category: organization.category
      }
      )
    })
    // console.log("RESPONSE", response.data)
    console.log("RESPONSE", orgInfo)

    res.json(orgInfo)
  } catch (err) {
    next(err)
  }
})


