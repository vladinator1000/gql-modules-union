import { gql } from "apollo-server-core";

export default gql`
  type Artist {
    name: String
    genre: String
  }
`