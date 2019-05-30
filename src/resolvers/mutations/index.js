const Group = require('./group')
const User = require('./user')

module.exports = {
  ...Group,
  ...User
}
