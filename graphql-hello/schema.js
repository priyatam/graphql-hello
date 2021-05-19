const { gql } = require('apollo-server-lambda')

const typeDefs = gql`
  # weather schema
  type ITunesSearchResult {
    kind: String
    trackId: String
    trackName: String
    artistId: String
    artistName: String
  }
  
  # queries
  type Query {
    iTunesSearch(term: String!): [ITunesSearchResult]
  }
`

module.exports = typeDefs