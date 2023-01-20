const mongoose = require('mongoose');
const validator = require('validator');


const User = mongoose.model('User', {
    email: {
       type: String,
       required: true,
       validate(v){
           if(!validator.isEmail(v)) throw new Error('E-mail non valide!');
       }
    },
    password:{
       type: String,
       required: true,
       validate(v){
           if(!validator.isLength(v,{min: 4, max:20})) throw new Error('Le mot de passe doit être entre 4 et 20 caractère');
       }
   
    }
       });
module.exports = User;
