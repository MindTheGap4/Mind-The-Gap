const router = require('express').Router()
const axios = require('axios')

module.exports = router

router.get('/:searchTerm/:name', async (req, res, next) => {
  try {
    // const api_key = 'e81bd7f2ba3feabb9808165b50fa89a3'
    console.log("IM IN THE BACKEND!!!")
    console.log('SEARCh', req.params.searchTerm)
    console.log('NAME', req.params.name)

    const  response = await axios({
      method: 'get',
      url:
        `http://data.orghunter.com/v1/charitysearch?user_key=e81bd7f2ba3feabb9808165b50fa89a3&${req.params.searchTerm}=${req.params.name}`
      // params: {
      //   'name': req.query
      // }
    })
    res.json(response.data.data)
  } catch (err) {
    next(err)
  }
})


