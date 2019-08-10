import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type Concert {
    id: ID!
    date: String
    organiser: Organiser
  }

  union Organiser = Artist | Venue

  type Artist {
    name: String
    genre: String
  }

  type Venue {
    name: String
    address: String
  }  

  type Query {
    featuredConcert: Concert!
  }
`;

export const resolvers = {
  Organiser: {
    // This doesn't work
    // https://www.apollographql.com/docs/apollo-server/features/unions-interfaces/
    __resolveType(organiser, _) {
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