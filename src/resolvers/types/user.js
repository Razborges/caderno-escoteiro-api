const db = require('../../../config/db')

module.exports = {
  group: user =>
    db('groups')
      .where({ id: user.group_id })
      .first()
}
