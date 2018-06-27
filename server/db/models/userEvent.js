const Sequelize = require('sequelize')
const db = require('../db')

const UserEvent = db.define('userEvent', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  status: {
    type: Sequelize.ENUM('Redeemed', 'Active'),
    defaultValue: 'Active'
  }
})

module.exports = UserEvent
