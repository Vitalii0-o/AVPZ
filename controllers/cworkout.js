const CWorkout = require('../models/CWorkout')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function(req, res) {
    try {
        const cworkouts = await CWorkout.find({})
        if(cworkouts.length === 0){
            res.json({ message: "Null"})
        }else{
            res.status(200).json(cworkouts)
        }
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function(req, res) {
    try {
        const cworkout = await CWorkout.findById(req.params.id)
        res.status(200).json(cworkout)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function(req, res) {
    try {
        await CWorkout.remove({_id: req.params.id})
        res.status(200).json({
            message: 'Workout deleted.'
        })
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.create = async function(req, res) {
    const cworkout = new CWorkout({
        title: req.body.title,
        repeatTime: req.body.repeatTime,
        weightEquip: req.body.weightEquip,
        restTime: req.body.restTime
    })

    try {
        await cworkout.save()
        res.status(201).json(cworkout)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function(req, res) {

    const updated = {
        title: req.body.title,
        repeatTime: req.body.repeatTime,
        weightEquip: req.body.weightEquip,
        restTime: req.body.restTime
    }

    const query = {_id: req.params.id};
    try {
        const cworkout = await CWorkout.findOneAndUpdate(
            {query},
            {$set: updated},
            {returnNewDocument: true}
        )
        res.status(200).json(cworkout)
    } catch (e) {
        errorHandler(res, e)
    }
}