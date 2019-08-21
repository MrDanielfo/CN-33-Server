const mongoose = require('mongoose');

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
    dateofBirth: {
      type: Date,
      required: true
    },
    vehicle: {
      type: String,
      enum: ['Automóvil', 'Motocicleta', 'Bicicleta']
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
      enum: ['Hombre', 'Mujer']
    },
    date: {
      type: Date,
      default: Date.now()
    }
  },
  { timestamps: true }
);

mongoose.Types.ObjectId.prototype.valueOf = function() {
  return this.toString();
};

module.exports = DeliverierSchema;
