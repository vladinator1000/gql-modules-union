import { ApolloServer } from 'apollo-server-express'
import express from 'express'

// import modules from './modules'
import { typeDefs, resolvers } from './monolithSchema'

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req, res }: any) => ({ req, res })
})

const app = express()

apolloServer.applyMiddleware({
	app,
	cors: {
		credentials: true,
		origin: 'http://localhost:3000'
	}
})

app.listen({ port: 4000 }, () =>
	console.log(
		`🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`
	)
)
