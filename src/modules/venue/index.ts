import {GraphQLModule} from '@graphql-modules/core'

import typeDefs from './venue.schema'
import resolvers from './venue.resolvers'

export default new GraphQLModule({
  typeDefs,
  resolvers
})