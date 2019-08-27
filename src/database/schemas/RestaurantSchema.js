const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
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
        ref: 'restaurantcategories',
        required: true
    },
    menus: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Menus'
        }
    ]
});

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
};

module.exports = RestaurantSchema;