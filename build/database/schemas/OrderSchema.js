"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  orders: [{
    restaurant: {
      type: Schema.Types.ObjectId,
      ref: 'Restaurants'
    },
    deliverier: {
      type: Schema.Types.ObjectId,
      ref: 'Deliveries'
    },
    orderName: {
      type: Schema.Types.ObjectId,
      ref: 'Restaurants'
    },
    pieces: {
      type: Number,
      "default": 1
    },
    pricePerPiece: {
      type: Schema.Types.ObjectId,
      ref: 'Restaurants'
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
      "default": false
    },

    /* o bien puede llamarse status y ser un enum */
    paid: {
      type: Boolean,
      "default": false
    },
    date: {
      type: Date,
      "default": Date.now()
    }
  }]
}, {
  timestamps: true
}); // Para buena ejecución con GraphQL

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = OrderSchema;
//# sourceMappingURL=OrderSchema.js.map