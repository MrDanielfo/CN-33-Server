"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuCategoryModel = exports.MenuModel = exports.RestaurantCategoryModel = exports.RestaurantModel = exports.OrderModel = exports.DeliverierModel = exports.UserModel = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

// Schemas
var UserSchema = require('../schemas/UserSchema');

var DeliverierSchema = require('../schemas/DeliverierSchema');

var OrderSchema = require('../schemas/OrderSchema');

var RestaurantSchema = require('../schemas/RestaurantSchema');

var RestaurantCategoriesSchema = require('../schemas/RCategorySchema');

var MenuSchema = require('../schemas/MenuSchema');

var MenuCategoriesSchema = require('../schemas/MCategorySchema'); // Models


var UserModel = _mongoose["default"].model('Users', UserSchema);

exports.UserModel = UserModel;

var DeliverierModel = _mongoose["default"].model('Deliveriers', DeliverierSchema);

exports.DeliverierModel = DeliverierModel;

var OrderModel = _mongoose["default"].model('Orders', OrderSchema);

exports.OrderModel = OrderModel;

var RestaurantModel = _mongoose["default"].model('Restaurants', RestaurantSchema);

exports.RestaurantModel = RestaurantModel;

var RestaurantCategoryModel = _mongoose["default"].model('RestaurantCategories', RestaurantCategoriesSchema);

exports.RestaurantCategoryModel = RestaurantCategoryModel;

var MenuModel = _mongoose["default"].model('Menus', MenuSchema);

exports.MenuModel = MenuModel;

var MenuCategoryModel = _mongoose["default"].model('MenuCategories', MenuCategoriesSchema); // Module exports


exports.MenuCategoryModel = MenuCategoryModel;
//# sourceMappingURL=index.js.map