//import patient model
const Patient = require('../models/patient');

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