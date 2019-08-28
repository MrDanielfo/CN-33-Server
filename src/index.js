import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

import { getContext, AuthDirective } from './actions/authActions';

require("dotenv").config();

import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

mongoose.connect(process.env.DATABASE, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'Error de Conexión'));
connection.on('open', () => console.log('DB Conectada'));

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  schemaDirectives: {
    AuthDirective: AuthDirective
  },
  context: async ({req}) => getContext(req)
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
   console.log(`🚀  Server ready at ${url}`);
});
