const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({


    identification:{
        type: Number,
        require: true,
        unique: true

    }, 
    name: {
        type: String,
        require: true
    },
    lastname:{
        type: String,
        require: true

    }, 
    email:{
        type: String,
        require: true,
        unique: true

    }, 
    password:{
        type: String,
        require: true
     
    }, 
    
})

module.exports=mongoose.model('user', UserSchema)