const { findAllCategory, findCategoryById } = require('../controller/categoryController');
const router = require('express').Router();

router.get('/list-category', findAllCategory);
router.get('/list-category/:category_id', findCategoryById);

module.exports = router;