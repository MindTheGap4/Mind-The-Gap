const Sequelize = require('sequelize')
const db = require('../db')

const Sponsor = db.define('sponsor', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  url: {
    type: Sequelize.STRING
  },
  twitterUrl: {
    type: Sequelize.STRING
  },
  facebookUrl: {
    type: Sequelize.STRING
  },
  instagramUrl: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  }
})

module.exports = Sponsor
