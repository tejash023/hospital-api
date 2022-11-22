const JwtStrategy = require('passport-jwt/lib/strategy');
const jwt = require('jsonwebtoken');
const Doctor = require('../models/doctor');

module.exports.createDoctor = async (req, res) => {

  try{
    
    let doctor = Doctor.findOne({email: req.body.email});

    if(!doctor || doctor.password != req.body.password){
      return res.json(422,{
        message: 'Invalid username or password'
      });
    }


    return res.json(200, {
      message: 'Sign in successfull',
      data:{
        token: JwtStrategy.toString(user.toJSON(), '', {expiresIN: '100000'})
      }
    })
  }catch(err){
    return res.json(500, {
      message: "Internal Server Error"
    })
  }

}