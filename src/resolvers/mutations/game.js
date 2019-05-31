const db = require('../../../config/db')

module.exports = {
  createGame: async (_, { data }) => {
    try {
      const [id] = await db('games').insert({
        name: data.name,
        rules: data.rules,
        material: data.material,
        goals: data.goals,
        obs: data.obs,
        duration: data.duration,
        url: data.url,
        property: data.property,
        user_id: data.user
      })
      return db('games')
        .where({ id })
        .first()
    } catch (err) {
      throw new Error(err.message)
    }
  },

  updateGame: async (_, { id, data }) => {
    try {
      await db('games')
        .where({ id })
        .update({
          name: data.name,
          rules: data.rules,
          material: data.material,
          goals: data.goals,
          obs: data.obs,
          duration: data.duration,
          url: data.url,
          property: data.property,
          vote: data.vote,
          user_id: data.user
        })
      const game = await db('games')
        .where({ id })
        .first()

      return game
    } catch (err) {
      throw new Error(err.sqlMessage)
    }
  },

  voteGame: async (_, { id, vote }) => {
    try {
      const game = await db('games')
        .where({ id })
        .first()
      const newVote = game.vote === 0 ? vote : (vote + game.vote) / 2
      await db('games')
        .where({ id })
        .update({ vote: newVote })
      return await db('games')
        .where({ id })
        .first()
    } catch (err) {
      throw new Error(err.sqlMessage)
    }
  },

  deleteGame: async (_, { id }) => {
    try {
      await db('games')
        .where({ id })
        .update({ status: false })
      return await db('games')
        .where({ id })
        .first()
    } catch (err) {
      throw new Error(err.sqlMessage)
    }
  }
}
