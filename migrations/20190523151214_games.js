exports.up = knex =>
  knex.schema.createTable('games', t => {
    t.increments('id').primary()
    t.string('name').notNull()
    t.text('rules').notNull()
    t.string('material').nullable()
    t.string('goals').nullable()
    t.string('obs').nullable()
    t.integer('duration').defaultTo(15)
    t.string('url').nullable()
    t.string('property').nullable()
    t.integer('user_id').unsigned()
    t.float('vote').defaultTo(0)
    t.boolean('status').defaultTo(true)
    t.timestamps(true, true)

    t.foreign('user_id').references('users.id')
  })

exports.down = knex => knex.schema.dropTable('games')
