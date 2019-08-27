const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantCategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    restaurantCategoryImage: {
        type: String,
        required: false
    },
    restaurants: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Restaurants'
      }
    ]
});

mongoose.Types.ObjectId.prototype.valueOf = function() {
  return this.toString();
};

module.exports = RestaurantCategorySchema;