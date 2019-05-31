const Group = require('./group')
const User = require('./user')
const Game = require('./game')

module.exports = {
  ...Game,
  ...Group,
  ...User
}
