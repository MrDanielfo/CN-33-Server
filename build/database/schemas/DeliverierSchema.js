"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var DeliverierSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  zipcode: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  dateBirth: {
    type: Date,
    required: true
  },
  vehicle: {
    type: String,
    "enum": ['AUTOMOVIL', 'MOTOCICLETA', 'BICICLETA']
  },
  officialId: {
    type: String,
    required: true
  },
  driverLicense: {
    type: String,
    required: false
  },
  vehicleLicense: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    "enum": ['HOMBRE', 'MUJER']
  }
}, {
  timestamps: true
});

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

DeliverierSchema.pre("save", function (next) {
  var deliverier = this;

  _bcrypt["default"].genSalt(10, function (err, salt) {
    _bcrypt["default"].hash(deliverier.password, salt, function (err, hash) {
      if (err) return next(err);
      deliverier.password = hash;
      next();
    });
  });
});
module.exports = DeliverierSchema;
//# sourceMappingURL=DeliverierSchema.js.map