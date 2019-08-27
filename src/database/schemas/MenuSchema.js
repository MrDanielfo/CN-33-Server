const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    menuCategoryID: {
        type: Schema.Types.ObjectId,
        ref: 'MenuCategories',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    menuImage: {
        type: String,
        required: false
    },
    restaurantID: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurants',
        required: true
    }
}, { timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
};

module.exports = MenuSchema;