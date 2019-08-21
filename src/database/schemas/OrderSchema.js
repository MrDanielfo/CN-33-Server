const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    order: [
        {
            restaurant: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Restaurant'
            },
            deliverier: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Deliverier'
            },
            orderName: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Restaurant.menu.name'
            },
            pieces: {
                type: Number,
                default: 1
            },
            pricePerPiece: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Restaurant.menu.price'
            },
            sendPrice: {
                type: Number,
                required: true
            },
            total: {
                type: Number,
                required: true
            },
            delivered: {
                type: Boolean,
                default: false
            },
            date: {
                type: Date,
                default: Date.now()
            }
        }
    ],

}, { timestamps: true });

// Para buena ejecución con GraphQL
mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
};

module.exports = OrderSchema;