const db = require('../../../config/db')

module.exports = {
  groups: (_, { filter }) => {
    if (!filter) return db('groups')

    const { number, state } = filter

    if (number && state) return db('groups').where({ number, state })
    if (number) return db('groups').where({ number })
    if (state) return db('groups').where({ state })
  },

  group: (_, { id }) => {
    if (!id) return null

    return db('groups')
      .where({ id })
      .first()
  }
}
