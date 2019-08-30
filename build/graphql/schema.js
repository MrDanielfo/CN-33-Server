"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServer = require("apollo-server");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  \n  # Directive\n  directive @AuthDirective on QUERY | FIELD_DEFINITION | FIELD\n\n  type Book {\n    title: String\n    author: String\n  }\n\n  enum Gender {\n    HOMBRE\n    MUJER\n  }\n\n  enum Vehicle {\n    AUTOMOVIL\n    MOTOCICLETA\n    BICICLETA\n  }\n\n  type User {\n    _id: ID\n    name: String\n    lastName: String\n    email: String\n    password: String\n    gender: Gender\n  }\n\n  type Deliverier {\n    name: String\n    lastName: String\n    email: String\n    password: String\n    city: String\n    country: String\n    zipcode: String\n    dateBirth: String\n    vehicle: Vehicle\n    officialId: String\n    driverLicense: String\n    vehicleLicense: String\n    gender: Gender\n  }\n\n  type Token {\n    token: String\n  }\n\n  type Restaurant {\n    _id: ID\n    name: String\n    address: String\n    restaurantCategoryID: RCategory\n    restaurantImage: String\n    menus: [Menu]\n  }\n\n  type RCategory {\n    _id: ID\n    name: String\n    restaurantCategoryImage: String\n    restaurants: [Restaurant]\n  }\n\n  type Menu {\n    _id: ID\n    name: String\n    description: String\n    menuCategoryID: MCategory\n    price: Int\n    menuImage: String\n    restaurantID: Restaurant\n  }\n\n  type MCategory {\n    _id: ID\n    name: String\n    menuCategoryImage: String\n    menus: [Menu]\n  }\n\n  input UserInput {\n    name: String!\n    lastName: String!\n    email: String!\n    password: String!\n    gender: Gender\n  }\n\n  input DeliverierInput {\n    name: String!\n    lastName: String!\n    email: String!\n    password: String!\n    city: String!\n    country: String!\n    zipcode: String!\n    dateBirth: String!\n    vehicle: Vehicle\n    officialId: String!\n    driverLicense: String\n    vehicleLicense: String\n    gender: Gender\n  }\n\n  input RestaurantInput {\n    name: String!\n    address: String!\n    restaurantImage: Upload\n    restaurantCategoryID: ID\n  }\n\n  input RCategoryInput {\n    name: String\n    restaurantCategoryImage: Upload\n  }\n\n  input MenuInput {\n    name: String!\n    description: String\n    menuCategoryID: ID\n    price: Int\n    menuImage: Upload\n    restaurantID: ID\n  }\n\n  input MCategoryInput {\n    name: String\n    menuCategoryImage: Upload\n  }\n\n  type Subscription {\n    restaurants: [Restaurant]\n  }\n\n  type Query {\n    books: [Book] @AuthDirective\n    getUsers: [User] @AuthDirective\n    getDeliveriers: [Deliverier] @AuthDirective\n    getRestaurants: [Restaurant] \n    getRestaurantCategories: [RCategory]\n    getMenus: [Menu]\n    getMenuCategories: [MCategory]\n  }\n\n  type Mutation {\n    addUser(data: UserInput): Token\n    addDeliverier(data: DeliverierInput): Token\n    doLogin(email: String, password: String) : Token\n    doLoginDeliveriers(email: String, password: String) : Token\n    updateUser(data: UserInput, userID: ID): User\n    addRestaurant(data: RestaurantInput): Restaurant\n    updateRestaurant(data: RestaurantInput, restaurantID: ID): Restaurant\n    addRestaurantCategory(data: RCategoryInput): RCategory\n    updateRestaurantCategory(data: RCategoryInput, rCategoryID: ID): RCategory\n    addMenu(data: MenuInput): Menu\n    updateMenu(data: MenuInput, menuID: ID): Menu\n    addMenuCategory(data: MCategoryInput): MCategory\n    updateMenuCategory(data: MCategoryInput, mCategoryID: ID): MCategory\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var typeDefs = (0, _apolloServer.gql)(_templateObject());
var _default = typeDefs;
exports["default"] = _default;
//# sourceMappingURL=schema.js.map