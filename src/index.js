const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');

require("dotenv").config();

mongoose.connect(process.env.DATABASE, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'Error de Conexión'));
connection.on('open', () => console.log('DB Conectada'));

// const books = [
//   {
//     title: 'Harry Potter and the Chamber of Secrets',
//     author: 'J.K. Rowling',
//   },
//   {
//     title: 'Jurassic Park',
//     author: 'Michael Crichton',
//   },
// ];

// const persons = [
//     {
//         name: 'Barack Obama',
//         age: 55,
//     },
//     {
//         name: 'Donald Trump',
//         age: 70,
//     },
// ];



// Schema
// const typeDefs = gql`
//   # Comments in GraphQL are defined with the hash (#) symbol.

//   # This "Book" type can be used in other type declarations.
//   type Book {
//     title: String
//     author: String
//   }

//   # ! se marca cuando un atributo será requerido
//   type Person {
//       name: String!
//       age: Int
//   }

//   # The "Query" type is the root of all GraphQL queries.
//   # (A "Mutation" type will be covered later on.)
//   type Query {
//     books: [Book]
//     getPersons: [Person]
//   }
// `;


// const resolvers = {
//   Query: {
//     books: () => books,
//     getPersons: () => persons
//   },
// };

// const server = new ApolloServer({ typeDefs, resolvers });

// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });