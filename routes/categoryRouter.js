const { findAllCategory, findFilmByCategoryId } = require('../controller/categoryController');
const router = require('express').Router();

router.get('/list-category', findAllCategory);
router.get('/list-category/:category_id', findFilmByCategoryId);

module.exports = router;