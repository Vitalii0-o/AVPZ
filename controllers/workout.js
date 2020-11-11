const Workout = require('../models/Workout')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function(req, res) {
    try {
        const workouts = await Workout.find({user: req.user.id})
        if(workouts.length === 0){
            res.json({ message: "Null"})
        }else{
            res.status(200).json(workouts)
        }
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function(req, res) {
    try {
        const workout = await Workout.findById(req.params.id)
        res.status(200).json(workout)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function(req, res) {
    try {
        await Workout.remove({_id: req.params.id})
        res.status(200).json({
            message: 'Workout deleted.'
        })
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.create = async function(req, res) {
    const workout = new Workout({
        title: req.body.title,
        user: req.user.id,
        repeatTime: req.body.repeatTime,
        weightEquip: req.body.weightEquip,
        restTime: req.body.restTime
    })

    try {
        await workout.save()
        res.status(201).json(workout)
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
        const workout = await Workout.findOneAndUpdate(
            {query},
            {$set: updated},
            {returnNewDocument: true}
    )
        res.status(200).json(workout)
    } catch (e) {
        errorHandler(res, e)
    }
}