const Message = require('./message')
const Channel = require('./channel')
const User = require('./user')
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

Channel.hasMany(Message, {
  onDelete: 'cascade',
  hooks: true
})

User.hasMany(Message)

Message.belongsTo(Channel)
Message.belongsTo(User)

module.exports = {
  Channel,
  Message,
  User
}
