const db = require('../../../config/db')

module.exports = {
  createGroup: async (_, { data }) => {
    try {
      const exist = await db('groups').where({
        number: data.number,
        state: data.state
      })
      if (exist.length === 0) {
        const [id] = await db('groups').insert(data)
        return db('groups')
          .where({ id })
          .first()
      }
      throw new Error('Grupo existente, por favor verifique os dados.')
    } catch (err) {
      throw new Error(err.message)
    }
  },

  updateGroup: async (_, { id, data }) => {
    try {
      await db('groups')
        .where({ id })
        .update(data)
      const group = await db('groups')
        .where({ id })
        .first()

      return group
    } catch (err) {
      throw new Error(err.sqlMessage)
    }
  }
}
