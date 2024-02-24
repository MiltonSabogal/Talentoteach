const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    id: Number,
    name: {
        type: String,
        require: true
    },
    lastname: String,
    email: String,
    password: String

})

module.exports=mongoose.model('user', UserSchema)