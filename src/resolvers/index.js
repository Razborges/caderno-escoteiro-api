const Query = require('./querys')
const Mutation = require('./mutations')
const User = require('./types/user')
const Group = require('./types/group')
const Game = require('./types/game')

module.exports = {
  Query,
  Mutation,
  Game,
  Group,
  User
}
