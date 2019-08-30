
import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

import { getContext, AuthDirective } from './actions/authActions';

import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';


mongoose.connect('mongodb+srv://mrdanielfo:corvettez6@clustercintanegra-gzdvg.mongodb.net/cintanegra?retryWrites=true&w=majority', {
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

server.listen(process.env.PORT || 8080).then(() => {
  console.log(`🚀  Server ready at 8080`);
});

/* TESTING */

export default server;
