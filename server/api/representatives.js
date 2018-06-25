const router = require('express').Router()
const axios = require('axios')
// const usSenate = require('civil-services-us-senate')

// const normalizedUsSenate =

router.get('/house/:state', async (req, res, next) => {
  try {
    // res.json(usSenate)
    const {data} = await axios.get(
      `https://api.propublica.org/congress/v1/members/house/${
        req.params.state
      }/current.json`,
      {headers: {'X-API-Key': process.env.REP_KEY}}
    )
    res.json(data)
    console.log('inside API/representatuves house/state', data)
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
      {headers: {'X-API-Key': process.env.REP_KEY}}
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
      {headers: {'X-API-Key': process.env.REP_KEY}}
    )
    res.json(data)
  } catch (err) {
    next(err)
  }
})

module.exports = router
