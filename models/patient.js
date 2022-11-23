const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({

  name:{
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  reports: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Report',
    }
  ]
},{
  timestamps: true
});


//export patient model
const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;