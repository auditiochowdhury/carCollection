const express = require('express')
const router = express.Router()
const carsController = require('../controllers/cars') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, carsController.getCars)

router.post('/createCar', carsController.createCar)

router.put('/markComplete', carsController.markComplete)

router.put('/markIncomplete', carsController.markIncomplete)

router.delete('/deleteCar', carsController.deleteCar)

module.exports = router