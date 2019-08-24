const mongoose = require('mongoose');
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
        enum: ['HOMBRE', 'MUJER']
    }
},{ timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
};

UserSchema.pre("save", function(next)  {
    let user = this;
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            if(err) return next(err);
            user.password = hash;
            next();
        })
    })
    
})

module.exports = UserSchema; 