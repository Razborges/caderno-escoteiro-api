exports.up = knex =>
  knex.schema.createTable('users', t => {
    t.increments('id').primary()
    t.string('name').notNull()
    t.string('email')
      .notNull()
      .unique()
    t.string('password', 50).notNull()
    t.integer('group_id').unsigned()
    t.enu('type', ['lobinho', 'escoteiro', 'sênior', 'pioneiro']).notNull()
    t.string('role')
      .notNull()
      .defaultTo('user')
    t.boolean('status')
      .notNull()
      .defaultTo(1)
    t.timestamps(true, true)

    t.foreign('group_id').references('groups.id')
  })

exports.down = knex => knex.schema.dropTable('users')
