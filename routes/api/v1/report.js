const express =  require('express');
const router = express.Router();
const passport = require('passport');

const reportController = require('../../../controllers/report_controller');

router.get('/:status', passport.authenticate('jwt', {session: false}), reportController.status);

module.exports = router;