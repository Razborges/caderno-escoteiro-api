const db = require('../../../config/db')

module.exports = {
  games: (_, { filter }) => {
    if (!filter) return db('games')

    const { search } = filter

    if (search)
      return db('games')
        .where('material', 'like', `%${search}%`)
        .orWhere('name', 'like', `%${search}%`)
  },

  game: (_, { id }) => {
    if (!id) return null

    return db('games')
      .where({ id })
      .first()
  }
}
