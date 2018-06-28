const User = require('./user')
const Point = require('./point')
const Activity = require('./activity')
const State = require('./state')
const Sponsor = require('./sponsor')
const Event = require('./event')
const UserEvent = require('./userEvent')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')

 */

User.hasMany(Activity)
Activity.belongsTo(User)

User.hasMany(Point)
Point.belongsTo(User)

Sponsor.hasMany(Event)
Event.belongsTo(Sponsor)

User.belongsToMany(Event, {through: 'userEvent'})
Event.belongsToMany(User, {through: 'userEvent'})

UserEvent.belongsTo(Event)
UserEvent.belongsTo(User)

module.exports = {
  User,
  Point,
  Activity,
  State,
  Sponsor,
  Event,
  UserEvent
}
