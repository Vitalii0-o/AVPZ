const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')

module.exports.getById = async function(req, res) {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function(req, res) {
    const updated = {
        name: req.body.name,
        age: req.body.age,
        weight: req.body.weight,
    }

    if (req.file) {
        updated.imageSrc = req.file.path
    }

    try {
        const user = await User.findOneAndUpdate(
            {id: req.params.id},
            {$set: updated},
            {new: true}
        )
        res.status(200).json(user)
    } catch (e) {
        errorHandler(res, e)
    }
}