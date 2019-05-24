const db = require('../../../config/db')

module.exports = {
  groups: () => {
    return db('groups')
  },

  group: (_, { filter }) => {
    if (!filter) return null

    const { id, number, state } = filter
  }
}
