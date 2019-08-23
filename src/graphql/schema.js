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

  type Restaurant {
    _id: ID
    name: String
    address: String
    restaurantCategoryID: ID
  }

  type RCategory {
    _id: ID
    name: String
  }

  type Menu {
    _id: ID
    name: String
    description: String
    menuCategoryID: ID
    price: Int
  }

  type MCategory {
    _id: ID
    name: String
  }

  type Query {
    books: [Book]
    getUsers: [User]
    getRestaurants: [Restaurant]
    getRestaurantCategories: [RCategory]
    getMenus: [Menu]
    getMenuCategories: [MCategory]
  }

  input UserInput {
    name: String
    lastName: String
    email: String
    password: String
    gender: String
  }

  input RestaurantInput {
    name: String!
    address: String!
    restaurantCategoryID: ID
  }

  input RCategoryInput {
    name: String
  }

  input MenuInput {
    name: String!
    description: String
    menuCategoryID: ID
    price: Int
  }

  input MCategoryInput {
    name: String
  }

  type Mutation {
    addUser(data: UserInput): User
    updateUser(data: UserInput, userID: ID): User
    addRestaurant(data: RestaurantInput): Restaurant
    updateRestaurant(data: RestaurantInput, restaurantID: ID): Restaurant
    addRestaurantCategory(data: RCategoryInput): RCategory
    updateRestaurantCategory(data: RCategoryInput, rCategoryID: ID): RCategory
    addMenu(data: MenuInput): Menu
    updateMenu(data: MenuInput, menuID: ID): Menu
    addMenuCategory(data: MCategoryInput): MCategory
    updateMenuCategory(data: MCategoryInput, mCategoryID: ID): MCategory
  }
`;

export default typeDefs;