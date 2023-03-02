const  {getByIdFilmsController, editFilmsController, addFilmsController,  deleteFilmsController, allGetFilmsController,  getByCategoryFilmsController, GetByGenreFilmsController, getByCountryFilmsController, addLikeFilmsController, allMovieAdminPageController } = require('../controllers/films.controller');

const router = require('express').Router();

router.post('/', addFilmsController);

router.get('/', allGetFilmsController);

router.get('/all', allMovieAdminPageController)

router.get('/:id', getByIdFilmsController);

router.put('/:id/edit', editFilmsController);

router.delete('/:id', deleteFilmsController);

router.get('/category/:categoryId', getByCategoryFilmsController);

router.get('/genre/:genre', GetByGenreFilmsController);

router.get('/country/:country', getByCountryFilmsController)

router.post('/:id/like', addLikeFilmsController)

module.exports = router;