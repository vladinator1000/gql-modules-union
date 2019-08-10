import {GraphQLModule} from '@graphql-modules/core'

import typeDefs from './artist.schema'
import resolvers from './artist.resolvers'

export default new GraphQLModule({
  typeDefs,
  resolvers
})