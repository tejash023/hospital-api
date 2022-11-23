//import patient model
const Patient = require('../models/patient');
const Report = require('../models/report');
const Doctor = require('../models/doctor');


//registering patients
module.exports.register = async (req, res) => {

  try{
    //check if patient is already registered
    let patient = await Patient.findOne({phone: req.body.phone});
    //console.log(patient);

    if(!patient){
      let patient = await Patient.create(req.body);
      return res.json(200,{
        message: 'Patient registered successfully',
        patientId: patient._id,
        name: patient.name
      })
    }else{
      return res.json(422,{
        message: 'A patient already exist with this number'
      })
    }
  }catch(err){
    console.log(err);
    return res.json(500,{
      message: 'Internal Server Error'
    })
  }
}


//creating report
module.exports.createReport = async (req,res) =>{
  
  try{
    //check if patient is available
    let patient = await Patient.findById(req.params.id);
    //console.log(patient);
    if(patient){
      let doctor = await Doctor.findById(req.body.doctor);

      //create a report for patient
      let reportData = {
        doctor: req.body.doctor,
        patient: req.params.id,
        status: req.body.status,
        date: req.body.date
      };

      let report = await Report.create(reportData);
      patient.reports.push(report);
      patient.save();

      return res.json(200,{
        message: 'Patient report created successfully'
      });

    }else{
      //console.log(err);
      return res.json(422,{
        message: 'Patient registration unsuccessfull'
      })
    }

  }catch(err){
    console.log(err);
    return res.json(500,{
      message: 'Internal server Error'
    });
  }
}



//generating all the reports of the user
module.exports.allReports = async (req, res) => {

  try{
    let patient = await Patient.findById(req.params.id).populate({
      path:'reports',
      populate: {path: 'doctor', select: 'name _id'},
    });

    if(patient){
      return res.status(200).json({
        message:`${patient.name} reports`,
        reports: patient.reports
      })
    }else{
      return res.status(422).json({
        message:'Patient not registered'
      })
    }

  }catch(err){
    console.log(err);
    return res.json(500,{
      message: 'Internal Server Error'
    })
  }
}