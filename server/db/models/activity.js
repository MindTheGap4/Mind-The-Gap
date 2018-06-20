const Sequelize = require('sequelize')
const db = require('../db')

const Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING
  },
  hours: {
    type: Sequelize.INTEGER
  },
  dollarAmount: {
    type: Sequelize.INTEGER
  },
  status: {
    type: Sequelize.ENUM('past', 'upcoming'),
    allowNull: false
  },
  points: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  link: {
    type: Sequelize.STRING
  },
  attendance: {
    type: Sequelize.ENUM('pending', 'confirmed'),
    defaultValue: 'pending'
  }
})

module.exports = Activity
