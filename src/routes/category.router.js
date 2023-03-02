const {CategoryCreateController, getCategoryController, categoryDeleteController} = require('../controllers/category.controller');

const router = require('express').Router();


router.post('/', CategoryCreateController);

router.get('/', getCategoryController);

router.delete('/:id', categoryDeleteController)

module.exports = router