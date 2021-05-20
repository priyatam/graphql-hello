const { ApolloServer, gql } = require('apollo-server-lambda');
const ITunesSearchAPI = require('./datasource')

const server = new ApolloServer({
  typeDefs: './schema.graphql',
  resolvers: {
    ITunesSearchResult,
    Query
  },
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