const mongoose = require("mongoose");
const emailValidator = require("email-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        min: [2, "userName must have atleat 2 characters"],
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: (value) => emailValidator.validate(value),
            message: (props) => `${props.value} is not valid email`
        }
    },
    password: {
        type: String,
        required: true,
        min: [6, "Password must have atleat 6 characters"],
        trim: true,
    }, 
    role: {
        type: String,
        required: true,
        enum: {
            values: ["admin", "member"],
            message: "{VALUE} is not supported role",
        },
        default: "member"
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
},
    { timestamps: true }
);


module.exports = mongoose.model("userCollection", userSchema);
