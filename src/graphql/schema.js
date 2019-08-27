import { gql } from 'apollo-server';

const typeDefs = gql`
  
  # Directive
  directive @AuthDirective on QUERY | FIELD_DEFINITION | FIELD

  type Book {
    title: String
    author: String
  }

  enum Gender {
    HOMBRE
    MUJER
  }

  type User {
    _id: ID
    name: String
    lastName: String
    email: String
    password: String
    gender: Gender
  }

  type Token {
    token: String
  }


  type Restaurant {
    _id: ID
    name: String
    address: String
    restaurantCategoryID: ID
    menus: [Menu]
  }

  type RCategory {
    _id: ID
    name: String
    restaurants: [Restaurant]
  }

  type Menu {
    _id: ID
    name: String
    description: String
    menuCategoryID: ID
    price: Int
    menuImage: String
    restaurantID: ID
  }

  type MCategory {
    _id: ID
    name: String
    menus: [Menu]
  }

  type Query {
    books: [Book] @AuthDirective
    getUsers: [User] @AuthDirective
    getRestaurants: [Restaurant]
    getRestaurantCategories: [RCategory]
    getMenus: [Menu]
    getMenuCategories: [MCategory]
  }

  input UserInput {
    name: String!
    lastName: String
    email: String
    password: String
    gender: Gender
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
    menuImage: Upload
    restaurantID: ID
  }

  input MCategoryInput {
    name: String
  }

  type Mutation {
    addUser(data: UserInput): Token
    doLogin(email: String, password: String) : Token
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