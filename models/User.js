const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Date,
        default: Date.now()
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    weight: {
        type: String
    },
    imageSrc: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('users', userSchema)