import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

require("dotenv").config();

import { UserModel } from './database/models/index';

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

// const User = {
//   name: "Pedro",
//   lastName: "Páramos",
//   email: "pedro@gmail.com",
//   password: "pedrito34",
//   gender : 'Hombre'
// }

// const createUser = async () => {
//   try {
//     const newUser = await UserModel.create(User);
//     console.log(newUser)

//   } catch(err) {
//     console.log(err)
//   }
// }