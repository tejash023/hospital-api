const express =  require('express');
const router = express.Router();

const doctorController = require('../controllers/doctors_controller');

router.post('/register', doctorController.createDoctor);

router.get('/hello', doctorController.hello);

module.exports = router;