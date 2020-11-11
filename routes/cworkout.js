const express = require('express')
const controller = require('../controllers/cworkout')
const router = express.Router()

router.get('/getAll',  controller.getAll)
router.get('/:id', controller.getById)
router.delete('/:id',  controller.remove)
router.post('/create', controller.create)
router.patch('/:id', controller.update)


module.exports = router