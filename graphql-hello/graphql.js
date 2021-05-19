// graphql.js

const { ApolloServer, gql } = require('apollo-server-lambda');

const typeDefs = require('./schema');
const resolvers = require('./resolvers')

const ITunesSearchAPI = require('./datasource')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    iTunesSearchAPI: new ITunesSearchAPI()
  }),
  playground: {
    endpoint: "/dev/graphql"
  }
})

exports.graphqlHandler = server.createHandler();

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});