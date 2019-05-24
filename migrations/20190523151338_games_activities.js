exports.up = knex =>
  knex.schema.createTable('games_activities', t => {
    t.increments('id').primary()
    t.time('hour').notNull()

    t.integer('game_id').unsigned()
    t.integer('actitity_id').unsigned()

    t.foreign('game_id').references('games.id')
    t.foreign('actitity_id').references('activities.id')
    t.timestamp('created_at').defaultTo(knex.fn.now())
  })

exports.down = knex => knex.schema.dropTable('games_activities')
