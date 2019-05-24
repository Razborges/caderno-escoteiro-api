exports.up = knex =>
  knex.schema.createTable('groups', t => {
    t.increments('id').primary()
    t.integer('number').notNull()
    t.string('state', 2).notNull()
    t.timestamp('created_at').defaultTo(knex.fn.now())
  })

exports.down = knex => knex.schema.dropTable('groups')
