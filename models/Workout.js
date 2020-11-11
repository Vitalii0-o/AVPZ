const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    repeatTime: {
        type: String,
    },
    weightEquip: {
        type: String
    },
    restTime: {
        type: String
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('workouts', workoutSchema)