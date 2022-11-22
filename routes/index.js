const express = require('express');

const router = express.Router();

console.log('Router Loaded');

router.use('/doctor', require('./doctor'));

router.use('/patient', require('./patient'));

router.use('/reports', require('./reports'));

module.exports = router;