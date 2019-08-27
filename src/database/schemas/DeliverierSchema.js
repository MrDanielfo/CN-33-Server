const mongoose = require('mongoose');
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const DeliverierSchema = new Schema(
  {
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
      enum: ['AUTOMOVIL', 'MOTOCICLETA', 'BICICLETA']
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
      enum: ['HOMBRE', 'MUJER']
    }
  },
  { timestamps: true }
);

mongoose.Types.ObjectId.prototype.valueOf = function() {
  return this.toString();
};

DeliverierSchema.pre("save", function (next) {
  let deliverier = this;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(deliverier.password, salt, (err, hash) => {
      if (err) return next(err);
      deliverier.password = hash;
      next();
    })
  })

})

module.exports = DeliverierSchema;
