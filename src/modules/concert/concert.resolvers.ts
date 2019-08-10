export default {
  Concert: {
    id: concert => concert.id,
    datetime: concert => concert.datetime,
    organiser: concert => concert.organiser
  },
  Organiser: {
    // This doesn't work
    // https://www.apollographql.com/docs/apollo-server/features/unions-interfaces/
    __resolveType(organiser, _, info) {
      console.log({ organiser, info })

      if (organiser.type === "artist") {
        return "Artist";
      }

      return "Venue";
    }
  },
  Query: {
    featuredConcert: () => ({
      id: 1,
      datetime: "2019-08-10T19:42:43Z",
      organiser: {
        id: 1,
        name: 'Birdland Jazz Club',
        address: '533 Peachtree Place',
        type: 'venue'
      }
    })
  }
}