const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuCategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    menus: [
      {
        type: Schema.Types.ObjectId,
        ref: 'menus'
      }
    ]
});

mongoose.Types.ObjectId.prototype.valueOf = function() {
  return this.toString();
};

module.exports = MenuCategorySchema;
