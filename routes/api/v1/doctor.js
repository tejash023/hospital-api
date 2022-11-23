const express =  require('express');
const router = express.Router();

const doctorController = require('../../../controllers/doctors_controller');

router.post('/register', doctorController.createDoctor);

router.post('/login', doctorController.createSession);

module.exports = router;