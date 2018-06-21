const router = require('express').Router()
const axios = require('axios')

module.exports = router

router.get('/:searchTerm/:name', async (req, res, next) => {
  try {
    // const api_key = 'e81bd7f2ba3feabb9808165b50fa89a3'
    const { data } = await axios({
      method: 'get',
      url:
        `http://data.orghunter.com/v1/charitysearch?user_key=e81bd7f2ba3feabb9808165b50fa89a3&${req.params.searchTerm}=${req.params.name}`
      // params: {
      //   'name': req.query
      // }
    })
    res.send(data)
  } catch (err) {
    next(err)
  }
})


