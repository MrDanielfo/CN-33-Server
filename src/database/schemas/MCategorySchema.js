const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuCategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    menuCategoryImage: {
        type: String,
        required: false
    },
    menus: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Menus'
      }
    ]
});

mongoose.Types.ObjectId.prototype.valueOf = function() {
  return this.toString();
};

module.exports = MenuCategorySchema;
