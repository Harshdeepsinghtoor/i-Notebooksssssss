const mongoose = require("mongoose");
const validator = require("validator");


var uniqueValidator = require('mongoose-unique-validator');

const usersSchema = new mongoose.Schema({
    first_names: {
        required: true,
        type: String,
        minlength: 2,
    },
    lasts_names: {
        type: String,
        minlength: 2,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already present"],
        validate(value) {

            if (!validator.isEmail(value)) {
                throw new Error("Email is Invalid");
            }
        },
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: [true, "Please enters another"],
        min: 10,
        // max: 10,
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female",],
    },
    adress: {
        required: true,
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

usersSchema.plugin(uniqueValidator);

// We will creates new Modelss   
const User = new mongoose.model("User", usersSchema);

module.exports = User;