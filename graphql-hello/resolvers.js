module.exports = {
  Query: {
    iTunesSearch: (_, { term }, { dataSources }) =>
    dataSources.iTunesSearchAPI.getITunesSearchResult({ term })
  }
}