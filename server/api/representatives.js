const router = require('express').Router()
const axios = require('axios')

router.get('/house/:state', async (req, res, next) => {
  try {
    const {data} = await axios.get(
      `https://api.propublica.org/congress/v1/members/house/${
        req.params.state
      }/current.json`,
      {headers: {'X-API-Key': 'AQU4JBzxHHzCREJtgfV0gCv43pPD4SGCTGhUwE19'}}
    )
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.get('/senate/:state', async (req, res, next) => {
  try {
    const {data} = await axios.get(
      `https://api.propublica.org/congress/v1/members/senate/${
        req.params.state
      }/current.json`,
      {headers: {'X-API-Key': 'AQU4JBzxHHzCREJtgfV0gCv43pPD4SGCTGhUwE19'}}
    )
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.get('/singleRep/:id', async (req, res, next) => {
  try {
    const {data} = await axios.get(
      `https://api.propublica.org/congress/v1/members/${req.params.id}.json`,
      {headers: {'X-API-Key': 'AQU4JBzxHHzCREJtgfV0gCv43pPD4SGCTGhUwE19'}}
    )
    res.json(data)
  } catch (err) {
    next(err)
  }
})

module.exports = router
