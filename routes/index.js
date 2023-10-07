const express = require('express');
const router = express.Router();
const filmRouter = require('./filmRouter');
const categoryRouter = require('./categoryRouter');


router.use('/api/open', filmRouter);
router.use('/api/open', categoryRouter);


module.exports = router;