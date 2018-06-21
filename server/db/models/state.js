const Sequelize = require('sequelize')
const db = require('../db')

const State = db.define('state', {
  name: {
    type: Sequelize.STRING
  },
  abbreviation: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING
  }
})

module.exports = State
