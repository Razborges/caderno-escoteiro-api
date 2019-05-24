require('dotenv').config()
const { ApolloServer } = require('apollo-server')
const { importSchema } = require('graphql-import')

const resolvers = require('./resolvers')
const schemaPath = './schema/index.graphql'

const server = new ApolloServer({
  // @ts-ignore
  typeDefs: importSchema(schemaPath),
  resolvers
})

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`Executando em ${url}`)
})
