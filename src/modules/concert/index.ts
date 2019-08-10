import { GraphQLModule } from '@graphql-modules/core'

import typeDefs from './concert.schema'
import resolvers from './concert.resolvers'

export default new GraphQLModule({
  typeDefs,
  resolvers
})