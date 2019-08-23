const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    orders: [
        {
            restaurant: {
                type: Schema.Types.ObjectId,
                ref: 'restaurants'
            },
            deliverier: {
                type: Schema.Types.ObjectId,
                ref: 'deliveriers'
            },
            orderName: {
                type: Schema.Types.ObjectId,
                ref: 'restaurants'
            },
            pieces: {
                type: Number,
                default: 1
            },
            pricePerPiece: {
                type: Schema.Types.ObjectId,
                ref: 'restaurants'
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