const mongoose = require('mongoose')
const Schema = mongoose.Schema

const feedSchema = new Schema({
    title: {
        type: String,
        // required: true,
        unique: true
    },
    timeWorkout: {
        type: String,
    },
    kind: {
        type: String
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('feeds', feedSchema)