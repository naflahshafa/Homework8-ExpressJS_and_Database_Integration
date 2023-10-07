const express = require('express');
const router = express.Router();
const { findAllFilm, findFilmById } = require('../controller/filmController.js');

router.get('/list-film', findAllFilm);
router.get('/list-film/:film_id', findFilmById);

module.exports = router;