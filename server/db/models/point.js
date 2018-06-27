const Sequelize = require('sequelize')
const db = require('../db')

const Point = db.define('point', {
  month: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  goal: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  totalEarned: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Point
