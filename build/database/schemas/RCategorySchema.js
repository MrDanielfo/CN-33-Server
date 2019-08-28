"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var RestaurantCategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  restaurantCategoryImage: {
    type: String,
    required: false
  },
  restaurants: [{
    type: Schema.Types.ObjectId,
    ref: 'Restaurants'
  }]
});

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = RestaurantCategorySchema;
//# sourceMappingURL=RCategorySchema.js.map