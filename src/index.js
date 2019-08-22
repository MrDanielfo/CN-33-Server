import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

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

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({port: process.env.PORT }).then(({ url }) => {
   console.log(`🚀  Server ready at ${url}`);
});
