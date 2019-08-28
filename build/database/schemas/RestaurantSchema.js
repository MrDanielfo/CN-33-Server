"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  restaurantCategoryID: {
    type: Schema.Types.ObjectId,
    ref: 'RestaurantCategories'
  },
  restaurantImage: {
    type: String,
    required: false
  },
  menus: [{
    type: Schema.Types.ObjectId,
    ref: 'Menus'
  }]
});

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = RestaurantSchema;
//# sourceMappingURL=RestaurantSchema.js.map