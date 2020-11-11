const mongoose = require('mongoose')
const Schema = mongoose.Schema

const comworkoutSchema = new Schema({
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
    }
})

module.exports = mongoose.model('cworkouts', comworkoutSchema)