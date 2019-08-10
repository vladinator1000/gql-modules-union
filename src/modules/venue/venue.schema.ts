import { gql } from "apollo-server-core";

export default gql`
  type Venue {
    name: String
    address: String
  }
`