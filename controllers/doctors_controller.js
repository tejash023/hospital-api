const jwt = require('jsonwebtoken');
const Doctor = require('../models/doctor');

module.exports.createDoctor = async (req, res) => {

  //console.log(req.body);

  try{
      if(req.body.password != req.body.confirm_password){
        return res.json(200,{
          message: 'Passwords do not match'
        });
      }
      //find the doctor using the email first before signing up - if email already exists
      let doctor = await Doctor.findOne({phone:req.body.phone});

      //if user doesn't exist - create the user and redirect to login page
      if(!doctor){
        await Doctor.create(req.body);
        return res.json(200,{
          message: 'Doctor registered successfully'
        })
      }else{
        //if user/email exists - redirect back
        return res.json(200,{
          message: 'Doctor already exists'
        });
      }
      

  }catch(err){
    console.log(err);
    return res.json(500, {
      message: "Internal Server Error"
    });
  }


}



module.exports.createSession = async (req, res) => {

  try{
    console.log(req.body.phone);
    let doctor = await Doctor.findOne({phone: req.body.phone});

    console.log('doctor', doctor)
    if(!doctor || doctor.password !== req.body.password){
      return res.json(422,{
        message: 'Invalid username or password'
      });
    }


    return res.json(200, {
      message: 'Sign in successfull',
      data:{
        token: jwt.sign(doctor.toJSON(), 'd34nfdhowi3423f3245fds', {expiresIn: '100000',})
      }
    });

  }catch(err){
    console.log(err);
    return res.json(500, {
      message: "Internal Server Error"
    })
  }

}

module.exports.hello = (req, res) => {
  return res.json(200,{
    message: 'Hello'
  })
}