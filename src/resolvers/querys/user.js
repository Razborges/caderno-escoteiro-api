const db = require('../../../config/db')

module.exports = {
  users: (_, { filter }) => {
    if (!filter) return db('users')

    const { name, email, type } = filter

    if (name) return db('users').where('name', 'like', `%${name}%`)
    if (email) return db('users').where({ email })
    if (type) return db('users').where({ type })
  },

  user: (_, { id }) => {
    if (!id) return null

    return db('users')
      .where({ id })
      .first()
  }
}
