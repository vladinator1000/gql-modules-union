import { gql } from "apollo-server-core";

export default gql`
  type Concert {
    id: ID!
    date: String
    organiser: Organiser
  }

  union Organiser = Artist | Venue

  type Query {
    featuredConcert: Concert!
  }
`