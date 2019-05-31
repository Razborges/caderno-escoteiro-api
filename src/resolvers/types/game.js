const db = require('../../../config/db')

module.exports = {
  user: game =>
    db('users')
      .where({ id: game.user_id })
      .first()
}
