const db = require('../../../config/db')

module.exports = {
  user: group => db('users').where({ group_id: group.id })
}
