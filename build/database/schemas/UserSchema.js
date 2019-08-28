"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
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
  password: {
    type: String,
    required: true
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

UserSchema.pre("save", function (next) {
  var user = this;

  _bcrypt["default"].genSalt(10, function (err, salt) {
    _bcrypt["default"].hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});
module.exports = UserSchema;
//# sourceMappingURL=UserSchema.js.map