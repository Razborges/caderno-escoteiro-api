const db = require('../../../config/db')

module.exports = {
  createUser: async (_, { data }) => {
    try {
      const exist = await db('users').where({
        email: data.email
      })
      if (exist.length === 0) {
        const [id] = await db('users').insert({
          name: data.name,
          email: data.email,
          password: data.password,
          group_id: data.group,
          type: data.type
        })
        return db('users')
          .where({ id })
          .first()
      }
      throw new Error('Usuário existente, por favor verifique os dados.')
    } catch (err) {
      throw new Error(err.message)
    }
  },

  updateUser: async (_, { id, data }) => {
    try {
      await db('users')
        .where({ id })
        .update({
          name: data.name,
          email: data.email,
          password: data.password,
          group_id: data.group,
          type: data.type
        })
      const user = await db('users')
        .where({ id })
        .first()

      return user
    } catch (err) {
      throw new Error(err.sqlMessage)
    }
  },

  deleteUser: async (_, { id }) => {
    try {
      await db('users')
        .where({ id })
        .update({ status: false })
      return await db('users')
        .where({ id })
        .first()
    } catch (err) {
      throw new Error(err.sqlMessage)
    }
  }
}
