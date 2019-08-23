import mongoose, { mongo } from 'mongoose';
// Schemas
const UserSchema = require('../schemas/UserSchema');
const DeliverierSchema = require('../schemas/DeliverierSchema');
const OrderSchema = require('../schemas/OrderSchema');
const RestaurantSchema = require('../schemas/RestaurantSchema');
const RestaurantCategoriesSchema = require('../schemas/RCategorySchema');
const MenuSchema = require('../schemas/MenuSchema');
const MenuCategoriesSchema = require('../schemas/MCategorySchema');


// Models
const UserModel = mongoose.model('Users', UserSchema);
const DeliverierModel = mongoose.model('Deliveriers', DeliverierSchema);
const OrderModel = mongoose.model('Orders', OrderSchema);
const RestaurantModel = mongoose.model('Restaurants', RestaurantSchema);
const RestaurantCategoryModel = mongoose.model('RestaurantCategories', RestaurantCategoriesSchema);
const MenuModel = mongoose.model('Menus', MenuSchema);
const MenuCategoryModel = mongoose.model('MenuCategories', MenuCategoriesSchema);

// Module exports
export {
    UserModel,
    DeliverierModel,
    OrderModel,
    RestaurantModel,
    RestaurantCategoryModel,
    MenuModel,
    MenuCategoryModel
};
