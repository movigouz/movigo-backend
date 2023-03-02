const {GetSliderAllController, addSliderController, deleteSliderController} = require('../controllers/sliders.controller')

const router = require('express').Router()

router.get('/getSliders', GetSliderAllController)
router.post('/addSlider', addSliderController)
router.delete('/:sliderId', deleteSliderController);

module.exports = router