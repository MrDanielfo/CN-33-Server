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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RestaurantCategory'
    },
    menu: [
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
                type: mongoose.Schema.Types.ObjectId,
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