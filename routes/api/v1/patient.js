const express = require('express');
const router = express.Router();
const passport = require('passport');

//importing patient controller
const patientController = require('../../../controllers/patient_controller');

//registering a patient
router.post('/register', passport.authenticate('jwt', {session: false}) ,patientController.register);

//create patient report
router.post('/:id/create_report', passport.authenticate('jwt', {session: false}), patientController.createReport);

//get all reports of a particular patient
router.get('/:id/all_reports', passport.authenticate('jwt', {session: false}), patientController.allReports);

module.exports = router;