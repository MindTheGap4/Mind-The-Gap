const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('event', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE
  },
  location: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  spotsAvailable: {
    type: Sequelize.INTEGER
  },
  pointCost: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Event
