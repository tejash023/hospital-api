const express = require('express');
const router = express.Router();
const passport = require('passport');

const patientController = require('../../../controllers/patient_controller');

router.post('/register', passport.authenticate('jwt', {session: false}) ,patientController.register);

module.exports = router;