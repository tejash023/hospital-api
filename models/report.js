const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
  doctor:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'doctor'
  },
  patient:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'patient'
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