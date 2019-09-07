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

  enum Vehicle {
    AUTOMOVIL
    MOTOCICLETA
    BICICLETA
  }

  type User {
    _id: ID
    name: String
    lastName: String
    email: String
    password: String
    gender: Gender
  }

  type Deliverier {
    name: String
    lastName: String
    email: String
    password: String
    city: String
    country: String
    zipcode: String
    dateBirth: String
    vehicle: Vehicle
    officialId: String
    driverLicense: String
    vehicleLicense: String
    gender: Gender
  }

  type Token {
    token: String
  }

  type Restaurant {
    _id: ID
    name: String
    address: String
    restaurantCategoryID: RCategory
    restaurantImage: String
    menus: [Menu]
  }

  type RCategory {
    _id: ID
    name: String
    restaurantCategoryImage: String
    restaurants: [Restaurant]
  }

  type Menu {
    _id: ID
    name: String
    description: String
    menuCategoryID: MCategory
    price: Int
    menuImage: String
    restaurantID: Restaurant
  }

  type MCategory {
    _id: ID
    name: String
    menuCategoryImage: String
    menus: [Menu]
  }

  input UserInput {
    name: String!
    lastName: String!
    email: String!
    password: String!
    gender: Gender
  }

  input DeliverierInput {
    name: String!
    lastName: String!
    email: String!
    password: String!
    city: String!
    country: String!
    zipcode: String!
    dateBirth: String!
    vehicle: Vehicle
    officialId: String!
    driverLicense: String
    vehicleLicense: String
    gender: Gender
  }

  input RestaurantInput {
    name: String!
    address: String!
    restaurantImage: Upload
    restaurantCategoryID: ID
  }

  input RCategoryInput {
    name: String
    restaurantCategoryImage: Upload
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
    menuCategoryImage: Upload
  }

  type Subscription {
    restaurants: [Restaurant]
  }

  type Query {
    books: [Book]
    getUsers: [User] @AuthDirective
    getDeliveriers: [Deliverier] @AuthDirective
    getRestaurants: [Restaurant] @AuthDirective
    getRestaurant(restaurantID: ID): Restaurant
    getRestaurantCategories: [RCategory] @AuthDirective
    getMenus: [Menu] @AuthDirective
    getMenuCategories: [MCategory] @AuthDirective
  }

  type Mutation {
    addUser(data: UserInput): Token
    addDeliverier(data: DeliverierInput): Token
    doLogin(email: String, password: String): Token
    doLoginDeliveriers(email: String, password: String): Token
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