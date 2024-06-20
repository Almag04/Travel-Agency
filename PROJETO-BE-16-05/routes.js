const express = require('express');
const router = express.Router();
const destinosRoutes = require('./destinos');
const hoteisRoutes = require('./hoteis');

router.use('/destinos', destinosRoutes);
router.use('/hoteis', hoteisRoutes);

module.exports = router;