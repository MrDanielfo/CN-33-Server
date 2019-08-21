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
    category: {
        type: Schema.Types.ObjectId,
        ref: 'RestaurantCategory'
    },
    menus: [
        {
            name : {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: false
            },
            menuCategory: {
                type: Schema.Types.ObjectId,
                ref: 'MenuCategory'
            },
            price : {
                type: Number,
                required: true
            }
        }
    ]
});

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
};

module.exports = RestaurantSchema;