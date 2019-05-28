require('dotenv').config()

const config = require('../knexfile')[process.env.NODE_ENV]
// @ts-ignore
module.exports = require('knex')(config)
