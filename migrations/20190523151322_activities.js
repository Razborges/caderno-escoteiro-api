exports.up = knex =>
  knex.schema.createTable('activities', t => {
    t.increments('id').primary()
    t.datetime('date').notNull()
    t.string('obs')
    t.string('property')
    t.enu('type', ['lobinho', 'escoteiro', 'sênior', 'pioneiro']).notNull()
    t.integer('user_id').unsigned()
    t.float('vote').defaultTo(0)
    t.boolean('status')
      .notNull()
      .defaultTo(1)
    t.timestamps(true, true)

    t.foreign('user_id').references('users.id')
  })

exports.down = knex => knex.schema.dropTable('activities')
