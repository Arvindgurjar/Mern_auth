const dotenv =require("dotenv");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const validator = require("validator")
const usersch = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        minLength: 4,
        maxLength: 20,

    },
    email: {
        type: String,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
    },
    mobile: {
        type: Number,
        required: true,
        unique: true,
        min: 999999999,
        max: 10000000000
    },
    profession: {
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        lowercase: true,
    },
    cpassword: {
        type: String,
        required: true,
        lowercase: true,
    },
    tokens: [
        {
            token:{
                type: String,
                required: true,
            }
        }
    ]
})

usersch.methods.generateAutoToken = async function () {
    try {
        const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (err) { console.log(err) }
}
const registration = new mongoose.model("user", usersch);
module.exports = registration