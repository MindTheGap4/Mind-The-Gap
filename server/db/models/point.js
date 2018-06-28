const Sequelize = require('sequelize')
const db = require('../db')

const Point = db.define('point', {
  month: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: new Date().getMonth()
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: new Date().getFullYear()
  },
  goal: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  totalEarned: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
})

module.exports = Point
