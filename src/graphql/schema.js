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

  type RCategory {
    _id: ID
    name: String
  }

  type MCategory {
    _id: ID
    name: String
  }

  type Query {
    books: [Book]
    getUsers: [User]
    getRestaurantCategories: [RCategory]
    getMenuCategories: [MCategory]
  }

  input UserInput {
    name: String
    lastName: String
    email: String
    password: String
    gender: String
  }

  input RCategoryInput {
    name: String
  }

  input MCategoryInput {
    name: String
  }

  type Mutation {
    addUser(data: UserInput): User
    updateUser(data: UserInput, userID: ID): User
    addRestaurantCategory(data: RCategoryInput) : RCategory
    updateRestaurantCategory(data: RCategoryInput, rCategoryID: ID): RCategory
    addMenuCategory(data: MCategoryInput) : MCategory
    updateMenuCategory(data: MCategoryInput, mCategoryID: ID) : MCategory
  }
`;

export default typeDefs;