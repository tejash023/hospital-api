const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  patient:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient'
  },
  doctor:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor'
  },
  status:{
    type: String,
    required: true
  },
  date:{
    type: String,
    required: true
  }
},{
  timestamps: true
});


//export reports
const Report = mongoose.model('Report', reportSchema);
module.exports = Report;