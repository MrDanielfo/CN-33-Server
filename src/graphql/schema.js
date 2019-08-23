import { gql } from 'apollo-server';


const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type User {
    _id: ID
    name: String
    lastName: String
    email: String
    password: String
    gender: String
  }

  type Query {
    books: [Book]
    getUsers: [User]
  }

  input UserInput {
    name: String
    lastName: String
    email: String
    password: String
    gender: String
  }

  type Mutation {
    addUser(data: UserInput): User
    updateUser(data: UserInput, userID: ID): User
  }
`;

export default typeDefs;